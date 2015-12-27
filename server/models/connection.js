var r = require('rethinkdb');

var connection = {
    host: 'db',
    port: 28015,
    authKey: '',
    db: 'rethinkdb_ex'
}

function createConnection(req, res, next) {
    r.connect(connection, function(error, conn) {
        if (error) {
            handleError(res, error);
        }
        else {
            // Save the connection in `req`
            req._rdbConn = conn;
            // Pass the current request to the next middleware
            next();
        }
    });
}

function closeConnection(req, res, next) {
    req._rdbConn.close();
    next();
}

function handleError(res, error) {
    return res.send(500, {error: error.message});
}


//connect and setup
    r.connect(connection, function(err, conn) {
        if (err) {
            console.log("Could not open a connection to initialize the database");
            console.log(err.message);
            process.exit(1);
        }

        r.table('lifeapp').indexWait('createdAt').run(conn).then(function(err, result) {
            console.log("Table and index are available");
        }).error(function(err) {
            // The database/table/index was not available, create them
            r.dbCreate(connection.db).run(conn).finally(function() {
                return r.tableCreate('lifeapp').run(conn)
            }).finally(function() {
                r.table('lifeapp').indexCreate('createdAt').run(conn);
            }).finally(function(result) {
                r.table('lifeapp').indexWait('createdAt').run(conn)
            }).then(function(result) {
                console.log("Table and index are available");
                conn.close();
            }).error(function(err) {
                if (err) {
                    console.log("Could not wait for the completion of the index `lifeapp`");
                    console.log(err);
                    process.exit(1);
                }
                console.log("Table and index are available");
                conn.close();
            });
        });
    });


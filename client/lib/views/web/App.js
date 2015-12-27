"use strict"
var ReactWeb = require("react");
var models = require("../../models/common");

class App extends ReactWeb.Component {
    render(){
        var data = JSON.stringify(models.Data.movieData);
        return (
            <div>
                hello web: {data}
            </div>
        )
    }
}
exports.App = App;

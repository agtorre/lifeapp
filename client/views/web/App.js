"use strict"
var React = require("react");
var models = require("../../models/common");

class App extends React.Component {
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


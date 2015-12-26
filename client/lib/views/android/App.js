var React = require("react-native");

class App extends React.Component {
    appStateClass: require('../../models/native/AndroidApp'),
    render(){
        return (
            <div>
                hello android
            </div>
        )
    }
}
exports.App = App;


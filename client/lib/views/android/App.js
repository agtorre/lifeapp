var React = require("react-native");
var { ListView, Text, TextInput, View, TouchableHighlight } = React;

class App extends React.Component {
    appStateClass: require('../../models/native/AndroidApp'),
    render(){
        return (
            <View style={styles.appContainer}>
                <Text>hello android</Text>
            </View>

        )
    }
}
exports.App = App;


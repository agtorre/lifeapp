'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} = React;

var Redux = require("redux");
//var render = require("react-dom").render;
var thunkMiddleware = require("redux-thunk");
var loggerMiddleware = require("redux-logger")();
var Provider = require("react-redux/native").Provider;

var Root = require("./lib/reducers/rootReducer").Root;

// components
var LifeAppAndroid = require("./lib/components/android/indexComponent").LifeAppAndroid;


const createStoreWithMiddleware = Redux.applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(Redux.createStore);

var initialState = {};
var store = createStoreWithMiddleware(Root, initialState);

class App extends React.Component {
    componentDidMount(){}
    render() {
        return (
            <Provider store={store}>
                {() => <LifeAppAndroid />}
            </Provider>
        )
    }
}

AppRegistry.registerComponent('LifeAppAndroid', () => App);

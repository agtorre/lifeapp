/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var Data = require('./models/common').Data;
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} = React;

var LifeAppAndroid = React.createClass({
  render: function() {
    var movie = Data.movieData[0];
    return (
      <View style={styles.container}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});
AppRegistry.registerComponent('LifeAppAndroid', () => LifeAppAndroid);

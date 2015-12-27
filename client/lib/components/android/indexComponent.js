"use strict"

var actions = require("../../actions/indexActions").Actions;
var connect = require("react-redux/native").connect;
var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableNativeFeedback
} = React;


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

class Card extends React.Component {
    render(){
        var data = <Text>loading...</Text>
        if (!this.props.isFetching){
            data = <Text> Data: {this.props.data}  </Text>;
        }
        return(
            <View style={styles.container}>
                { data }
                <TouchableNativeFeedback
                    onPress={this.props.getCard}
                    type={"RippleAndroid"}>
                    <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                      <Text style={{margin: 30}}>Button</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
};

class LifeAppAndroid extends Component {
    //var movie = Data.movieData[0];
    constructor(props){
        super(props);
        console.log("1");
        this.getCard = this.getCard.bind(this);
    }
    getCard(){
        console.log("2");
        actions.GetCard(this.props.dispatch);
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>hello redux</Text>
                <Card onClick={this.props.getCard} data={this.props.data} isFetching={this.props.isFetching}/>
            </View>
        );
    }
}

var dataMapper = function(state){
    return {
        data: state.Index.data,
        isFetching: state.Index.isFetching
    };

}
exports.LifeAppAndroid = connect(dataMapper)(LifeAppAndroid);

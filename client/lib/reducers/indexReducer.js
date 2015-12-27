var actions = require("../actions/indexActions");

var getInitialState = function(){
    return {
        data:"no data",
        isFetching:false
    };
};

exports.Index = function(state, action){
    if (state == undefined){
        state = getInitialState();
    }
    var newState = {};

    switch (action.type){
    case actions.GETCARD:
        newState.data = "some data";
        break;
    default:
        return state;
    }

    nextState = Object.assign({}, state, newState);
    return nextState;
}

"use strict"

exports.GETCARD = 'GETCARD';

var GetCard = function(dispatch){
    var action = {
        type: exports.GETCARD,
    };
    dispatch(action);
};

exports.Actions = {
    GetCard:GetCard
};

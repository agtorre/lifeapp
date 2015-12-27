var Redux = require("redux");
var Index = require("./indexReducer").Index;

const Root = Redux.combineReducers({
      Index
})
exports.Root = Root;

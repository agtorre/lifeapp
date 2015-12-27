var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var cardSchema = new Schema({
    name: String,
    points_type: String,
    points: Number,
})


var Card = mongoose.model('Card', cardSchema);

export function getCard(name){
  var result = Card.findOne({ name: name});


  return result.then(function(card){
      return card
  });
}


export function setCard(name, points_type, points){
  var result = Card.findOneAndUpdate({name: name}, {$set:{points_type: points_type, points: points}}, {new: true, upsert: true});

  return result.then(function(card){
      return card;
  });
}



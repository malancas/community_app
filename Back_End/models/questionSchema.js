var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require("../models/userSchema");

var questionSchema = new Schema({
  name : { type: String, required: true},
  description : { type: String, required: true },
  category : { type: String, required: true },
<<<<<<< HEAD
  _creator : { type: String, ref: 'User'}
=======
  //id : { type: Integer, required: true },
>>>>>>> f559a071cb81db6cd9ee5020f04e06c295b00a6c
},
{
  timestamps : true
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
<<<<<<< HEAD
var User = require('./userSchema');
=======
var User = require("../models/userSchema");
>>>>>>> 10e1df0bcac6be7dfab12c897e2b8ed91af2b058

var questionSchema = new Schema({
  name : { type: String, required: true},
  description : { type: String, required: true },
  category : { type: String, required: true },
<<<<<<< HEAD
  _creator : { type: String, ref: 'User'}
=======
<<<<<<< HEAD
  _creator : { type: String, ref: 'User'}
=======
  //id : { type: Integer, required: true },
>>>>>>> f559a071cb81db6cd9ee5020f04e06c295b00a6c
>>>>>>> 10e1df0bcac6be7dfab12c897e2b8ed91af2b058
},
{
  timestamps : true
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;

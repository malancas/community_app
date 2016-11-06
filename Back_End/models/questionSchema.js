var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./userSchema');

var questionSchema = new Schema({
  name : { type: String, required: true},
  description : { type: String, required: true },
  category : { type: String, required: true },
  _creator : { type: String, ref: 'User'}
},
{
  timestamps : true
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;

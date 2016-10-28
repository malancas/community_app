var mongoose = require('moongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  name : { type: String, required: true},
  description : { type: String, required: true },
  category : { type: String, required: true },
  id : { type: Integer, required: true },
},
{
  timestamps : true
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;

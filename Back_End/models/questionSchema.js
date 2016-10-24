var mongoose = require('moongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  content: { type: String, required: true },
  author: { type: String, required: true },
  //location: String // Change to use gps info
  timestamp: default.Date.now
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;

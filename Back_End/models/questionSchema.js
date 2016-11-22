var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
	creator : { 
		type: String, 
		ref: 'User', 
		required: true 
	},
  description : { 
  	type: String, 
  	required: true 
  },
  category : { 
  	type: String, 
  	required: true 
  },
  status : { 
  	type: String, 
  	required: true 
  },
  optionA: { 
  	type: String, 
  	required: true 
  },
  optionB: { 
  	type: String, 
  	required: true 
  },
  //id : { type: Number, required: true },
},
{
  timestamps : true
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;


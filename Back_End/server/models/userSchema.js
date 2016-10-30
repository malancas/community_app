var mongoose = require('moongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username : { type : String, required : true, unique : true },
  password : { type : String, required : true },
  admin : Boolean,
  //location: String // Change to use gps info
  questions : { type : Array , "default" : [] }
},
{
   timestamps : true //automatically adds createdAt/updatedAt fields
});

var User = mongoose.model('User', userSchema);

module.exports = User;

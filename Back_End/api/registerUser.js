var mongoose = require("mongoose");
var User = mongoose.model('User', ../models/userSchema);

//Username and password should already be parsed
function registerUser(uname, pword){
  if (User.findOne({ 'username': uname})){
    return 
    {
      status : "fail",
      data : { "username" : "Username is already taken" }
    }
  }
  var newUser = new User ({
    username: uname,
    password: pword
  });
  newUser.save(function(err) {if (err) console.log ('Error adding user to database') return { status: "error", data: "User couldn't be saved" }});
  
  return 
  {
    status : "success",
    data : { 
      "post" : { "username" : uname, "password" : pword }
    }
  }
}

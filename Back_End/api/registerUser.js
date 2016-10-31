var mongoose = require("mongoose");
var User = require("../models/userSchema");

//Username and password should already be parsed
function registerUser(uname, pword){
  if (!User.findOne({ "username": uname })){
     console.log('Username already taken');
    return
    ({
      "status" : "fail",
      "data" : { "username" : "Username is already taken" }
   });
  }
  var newUser = new User ({
    "username" : uname,
    "password" : pword,
    "admin" : false
  });
  newUser.save(function(err) {
     if (err) {
        console.log ('Error adding user to database')
        return ({ status : "error", data : "User couldn't be saved" });
     }
  });
  console.log('USER ADDED TO DATABASE');
  return
  ({
    "status" : "success",
    "data" : { "post" : { "username" : uname, "password" : pword } }
   });
}

module.exports = {
   registerUser: registerUser
}

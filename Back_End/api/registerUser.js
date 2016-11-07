var mongoose = require("mongoose");
var User = require("../models/userSchema");

//Username, password and email should already be parsed
function registerUser(uname, pword, emailadd){
  // check if username is unique
  if (!User.findOne({ "username": uname })){
     console.log('Username already taken');
    return
    ({
      "status" : "fail",
      "data" : { "username" : "Username is already taken" }
   });
  }

  // check if email is unique
  if (!User.findOne({ "email": emailadd })){
     console.log('email already taken');
    return
    ({
      "status" : "fail",
      "data" : { "email" : "Email is already taken" }
   });
  }

  // insert info into newUser
  var newUser = new User ({
    "username" : uname,
    "password" : pword,
    "email" : emailadd,
    "admin" : false
  });

  newUser.save(function(err) {
    if (err) {
      console.log ('Error adding user to database')
      return ({ status : "error", data : "User couldn't be saved" });
    }
    console.log('USER ADDED TO DATABASE');
    return
    ({
      "status" : "success",
      "data" : { "post" : { "username" : uname, "password" : pword, "email" : emailadd } }
    });
  });

}

module.exports = {
   registerUser: registerUser
}

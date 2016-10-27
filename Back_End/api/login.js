var mongoose = require("mongoose");
var User = require("../models/userSchema");

//Username and password should already be parsed
function login(uname, pword){
  if (!User.findOne({ "username": uname })){
    return 
    ({
      "status" : "fail",
      "data" : { "username" : "Username is already taken" }
    });
  }
  else if (!User.findOne({ "password": pword  })){
    return
    ({
      "status" : "fail",
      "data" : { "password" : "Incorrect password" }
  });
  else {
    return 
    ({
      "status" : "success",
      "data" : { 
        "post" : { "username" : uname, "password" : pword }
      }
    });
  }
}

module.exports = {
  login:login
}

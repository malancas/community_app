var mongoose = require("mongoose");
var User = require("../models/userSchema");

function deleteQuestion(uname){
  User.findOne({ "username" : uname });
  if (!User){
    return
    ({
      "status" : "fail",
      "data" : { "username" : "User not found" }
    });
  }

  return
  ({
    "status" : "success",
    "data" : {
      "get" : { "questions" : User.questions }
      }
  });
}

module.exports = {
  deleteQuestion:deleteQuestion
}

var mongoose = require("mongoose");
var User = require("../models/userSchema");

function addQuestion(uname, qname, qdescription, qcategory){
  User.findOne({ "username" : uname });
  if (!User){
    return
    ({
      "status" : "fail",
      "data" : { "username" : "User not found" }
    });
  }
  
  // Make unique id
  {$push : {
    User.questions : {
      "name" : qname,
      "description" : qdescription,
      "category" : qcategory
      //"id" : generate unique id
    }
  }}
  
  return
  ({
    "status" : "success",
    "data" : {
      "put" : { "name" : qname, "description" : qdescription, "category" : qcateogry }
    }
  });
}

module.exports = {
  addQuestion:addQuestion
}

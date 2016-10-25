var mongoose = require("mongoose");
var User = require("../models/userSchema");

function addQuestion(uname, qname, qdescription, qcategory){
  var query = User.findOne({ "username" : uname });
  if (!query){
    return
    {
      status : "fail",
      data : { "username" : "User not found" }
    }
  }

  userQuestions = query.select("questions");
  {$push : {
    userQuestions : {
      "name" : qname,
      "description" : qdescription,
      "category" : qcategory
    }
  }}
  return
  {
    status : "success",
    data : {
      "put" : { "name" : qname, "description" : qdescription, "category" : qcateogry }
    }
  }
}

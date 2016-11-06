var mongoose = require("mongoose");
var User = require("../models/userSchema");
var Question = require('../models/questionSchema');

function addQuestion(uname, qname, qdescription, qcategory){
  User.findOne({ "username" : uname }, function(err, User){
     if (err) {
        return
        ({
          "status" : "fail",
          "data" : { "username" : "User not found" }
       });
     }
     var question1 = new Question({
         "name" : qname,
         "description" : qdescription,
         "category" : qcategory,
         "_creator": User._id       //assign the _id from the User
     });
     console.log(User._id);
     question1.save(function(err) {
        if(err) {
           console.log('error saving post')
           return;
        }
        console.log('post saved');
        return
        ({
          "status" : "success",
          "data" : {
            "put" : { "name" : qname, "description" : qdescription, "category" : qcateogry }
          }
        });
    });
 });
}

module.exports = {
   addQuestion: addQuestion
}

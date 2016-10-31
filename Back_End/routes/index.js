var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require("../models/userSchema");
var Question = require("../models/questionSchema");

// api routes //
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Log user in, assume app is already connected to the database
router.put('/addQuestion', addQuestion);
router.delete('/deleteQuestion', deleteQuestion);
router.get('/viewQuestion', viewQuestion);
router.put('/register', register);
router.post('/login', login);

function addQuestion(req, res){
  if (!req.body) res.json({"status" : "fail",
                                   "data" : "No data sent"});
  User.findOne({ "username" : res.user.username });
  if (!User){
    res.json({
      "status" : "fail",
      "data" : { "username" : "User not found" }
    });
  }
  
  // Make unique id
  var newQuestion = {"name" : req.body.qname, "description" : req.body.qdescription, "category" : req.body.qcategory};
  Users.findOneAndUpdate({username: req.user.username}, {$push: {questions: newQuestion}});
  
  res.json({
    "status" : "success",
    "data" : {
      "put" : { "name" : res.body.qname, "description" : res.body.qdescription, "category" : res.body.qcateogry }
    }
  });
}

function deleteQuestion(req, res){
  console.log('Delete question...nothing here yet');
}

function viewQuestion(req, res){
  console.log('View question...nothing here yet');
}

function register(req, res){
  if (!req.body) return res.json({"status" : "fail",
                                   "data" : "No data sent"});
  else if (!User.findOne({"username" : req.user.username})){
    res.json({
      "status" : "fail",
      "data" : { "username" : "Username is already taken" }
    });
  }
  else {
    var newUser = new User ({
      "username" : req.user.username,
      "password" : req.user.password,
      "admin" : false
    });
    newUser.save(function(err) {
      if (err) {
        console.log('Error adding user to database');
        res.json({
          "status" : "error",
          "data" : "User couldn't be saved"
        });
      }
      res.json({
        "status" : "success",
        "data" : {
          "post" : {"username" : req.user.username, 
                    "password" : req.user.password}
        }
      });
    });
  }
}

function login(req, res){
  if (!req.body) {
    res.json({
      "status" : "fail",
      "data" : "No data sent"
    });
  }
  else if (!User.findOne({"username" : req.user.username})){
    res.json({
      "status" : "fail",
      "data" : { "username" : "Username not found" }
    });
  }
  else if (!User.findOne({"username" : req.user.username, "password" : req.user.password})){
    res.json({
      "status" : "fail",
      "data" : { "Password" : "Incorrect password" }
    });
  }
  else {
    res.json({
      "status" : "success",
      "data" : { 
        "post" : { "username" : uname, "password" : pword }
      }
    });
  }
}

module.exports = router;

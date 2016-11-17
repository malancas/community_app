var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require("../models/userSchema");
var Question = require("../models/questionSchema");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/communitydb')

// api routes //
/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index', { title: 'Express' });
});

// Log user in, assume app is already connected to the database
router.put('/addQuestion', addQuestion);
router.get('/deleteQuestion', deleteQuestion);
router.get('/viewQuestion', viewQuestion);
router.put('/register', register);
router.put('/login', login);

function addQuestion(req, res){
  if(!req.body) res.json({
    "status" : "fail",
    "data" : "No data sent"
  });
  User.findOne({ "username" : req.user.username });
  if(!User){
    res.json({
      "status" : "fail",
      "data" : { "username" : "User not found" }
    });
  }
  
  // Make unique id for Question
  var newQuestion = {"name" : req.body.qname, "description" : req.body.qdescription, "category" : req.body.qcategory};
  Users.findOneAndUpdate({ username : req.user.username}, {$push : {questions : newQuestion} });

  res.json({
    "status" : "success",
    "data" : {
      "put" : { "name" : res.body.qname, "description" : res.body.qdescription, "category" : res.body.qcateogry }
    }
  });
}

function deleteQuestion(req, res){
  res.render('index', { title: 'FUTURE DELETE QUESTION '});
  console.log('Delete question...nothing here yet');
}

function viewQuestion(req, res){
  res.render('index', { title: 'NOTHING HERE YET' });
  console.log('View question...nothing here yet');
}


function register(req, res){
  if(!User.findOne({ "username" : req.body.username })){
    res.json({
      "status" : "fail",
      "Message" : "Username already taken"
    });
  }
  // check if email is unique
  if(!User.findOne({ "email" : req.body.email })){
    res.json({
      "status" : "fail",
      "Message" : "Email already taken" 
    });
  }
  

  var newUser = new User({
    "username" : JSON.parse(JSON.stringify(req.body.username).replace(/"\s+|\s+"/g,'"')),
    "password" : JSON.parse(JSON.stringify(req.body.password).replace(/"\s+|\s+"/g,'"')),
    "email" : JSON.parse(JSON.stringify(req.body.email).replace(/"\s+|\s+"/g,'"')),
    "admin" : false
  });

  newUser.save(function(err){
    if(err){
      console.log('Error adding user to database');
      return res.send();
      res.json({ "status": "fail", "ERROR": err });
    }else
      res.json({ "SUCCESS": newUser });
  });
}

function login(req, res){
  if(!User.findOne({ "username" : JSON.parse(JSON.stringify(req.body.username).replace(/"\s+|\s+"/g,'"')) })){
    res.json({
      "status": "fail", 
      "Message" : "Username not found."
    });
  }else if(!User.findOne({ "username" : JSON.parse(JSON.stringify(req.body.username).replace(/"\s+|\s+"/g,'"')), 
    "password" : JSON.parse(JSON.stringify(req.body.password).replace(/"\s+|\s+"/g,'"')) })){
    res.json({
      "status" : "fail", 
      "Message" : "Username & password combination not found."
    });
  }else{
    res.json({
      "status" : "Success!", 
      "Message" : User
    });
  }
}

module.exports = router;

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

  var newq = new Question({
    "creator" : User.objectId,
    "description" : JSON.parse(JSON.stringify(req.body.description).replace(/"\s+|\s+"/g,'"')),
    "category" : JSON.parse(JSON.stringify(req.body.category).replace(/"\s+|\s+"/g,'"')),
    "status" : "Open",
    "optionA" : JSON.parse(JSON.stringify(req.body.optionA).replace(/"\s+|\s+"/g,'"')),
    "optionB" : JSON.parse(JSON.stringify(req.body.optionB).replace(/"\s+|\s+"/g,'"')),
  });
  newq.save(function(err){
    if(err){
      console.log('Error saving question');
      return res.send();
      res.json({ "status": "fail", "ERROR": err });
    } else
      res.json({ "SUCCESS": newq });
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
  var newUsername = JSON.parse(JSON.stringify(req.body.username).replace(/"\s+|\s+"/g,'"'));

  var newPassword = JSON.parse(JSON.stringify(req.body.password).replace(/"\s+|\s+"/g,'"'))

  var newEmail = JSON.parse(JSON.stringify(req.body.password).replace(/"\s+|\s+"/g,'"'))

  User.findOne({ "username" :  newUsername}, function(err, foundUsername){
    if (foundUsername != null){
      res.status(400).json({message : "Username already taken"});
  }});
    
  // check if email is unique
  User.findOne({"password" : newPassword}, function(err, foundPassword){
    if (foundPassword != null){
      res.status(400).json({message : "Password not available"});
    }
  });
  
  User.findOne({ "email" : newEmail }, function(err, foundEmail){
    if (foundEmail != null){
      res.status(400).json({message : "Email not  available"});
    }
  });
  
  var newUser = new User({
    "username" : newUsername,
    "password" : newPassword,
    "email" : newEmail,
    "admin" : false
  });

  newUser.save(function(err){
    if(err){
      res.status(400).json({ message: "Error adding user to database" });
    }else
      res.status(200).json({ message: "User has been registered"});
  });
}


function login(req, res){
  // Checks if username is not in database
  var username1 =  JSON.parse(JSON.stringify(req.body.username).replace(/"\s+|\s+"/g,'"'))

  User.findOne({ "username" : username1 }, function (err, foundUser){
    if (!foundUser){
      res.status(400).json({message: "Could not find username"});
    }
    else {
      if (foundUser.password ==  JSON.parse(JSON.stringify(req.body.password).replace(/"\s+|\s+"/g,'"'))){
        res.status(200).json({message: "User logged in."});
      }
      else {
        res.status(400).json({message: "Wrong username-password pairing"});
      }
    }});
}

module.exports = router;


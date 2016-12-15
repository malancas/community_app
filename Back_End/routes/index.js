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
  console.log(newUsername);

  var newPassword = JSON.parse(JSON.stringify(req.body.password).replace(/"\s+|\s+"/g,'"'));
  console.log(newPassword);

  var newEmail = JSON.parse(JSON.stringify(req.body.email).replace(/"\s+|\s+"/g,'"'))
  console.log(newEmail);

  // Check if username is unique
  User.findOne({"username" : newUsername}, function(err, result){
    if (err){
      return res.status(400).json({message : "Error searching for user"});
    }
    else if (result != null){
      return res.status(400).json({message : "Username already taken"});
    }
  });
    
  // Check if password is unique
  User.findOne({"password" : newPassword}, function(err, result){
    if (err){
      return res.status(400).json({message : "Error searching for user"});
    }
    else if (result != null){
      return res.status(400).json({message : "Password not available"});
    }
  });

  // Check if email is unique
  emailQuery = User.findOne({"email" : newEmail}, function(err, result){
    if (err){
      return res.status(400).json({message : "Error searching for user"});
    }
    else if (result != null){
      return res.status(400).json({message : "Email already connected to another account"});
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
      return res.status(400).json({ message: "Error adding user to database" });
    }
    else {
      return res.status(200).json({ message: "User has been registered"});
    }
  });
  return res.status(400).json({ message: "Unknown error"});
}


function login(req, res){
  // Checks if username is not in database
  var loggedUser =  JSON.parse(JSON.stringify(req.body.username).replace(/"\s+|\s+"/g,'"'));
  console.log(loggedUser);
  var loggedPassword = JSON.parse(JSON.stringify(req.body.password).replace(/"\s+|\s+"/g,'"'));

  User.findOne({"username" : loggedUser}, function(err, result){
    if (err){
      return res.status(400).json({ message: "Error searching for user"});
    }
    else if (result == null){
      return res.status(400).json({message: "Could not find username"});
    }
    else {
      console.log(result.password);
      console.log(loggedPassword);
      if (result.password != loggedPassword){
        return res.status(400).json({ message: "Wrong username-password pairing" });
      }
      return res.status(200).json({message: "User logged in."});
    }
  });
}

module.exports = router;


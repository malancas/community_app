var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/userSchema");

// api routes //
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Log user in, assume app is already connected to the database
router.put('/addQuestion', addQuestion);

function addQuestion(req, res){
  if (!req.body) res.json({"status" : "fail",
                                   "data" : "No data sent"});
  User.findOne({ "username" : res.body.username });
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
      "name" : res.body.qname,
      "description" : res.body.qdescription,
      "category" : res.body.qcategory
      //"id" : generate unique id
    }
  }}
  
  return
  ({
    "status" : "success",
    "data" : {
      "put" : { "name" : res.body.qname, "description" : res.body.qdescription, "category" : res.body.qcateogry }
    }
  });
}

module.exports = router;

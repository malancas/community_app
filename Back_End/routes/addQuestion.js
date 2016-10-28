var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require("../models/userSchema");
var addQuestion = require('../api/addQuestion');
var router = express.Router();

var jsonParser = bodyParser.json()
// Log user in, assume app is already connected to the database
router.put('/addQuestion', jsonParser, function(req, res) {
  if (!req.body) res.send( ({"status" : "fail",
                                   "data" : "No data sent"}); )
  //parse input from json format
  res.send(addQuestion.addQuestion(req.body.username, req.body.qname, qdescription, qcategory))
});

model.exports = router;

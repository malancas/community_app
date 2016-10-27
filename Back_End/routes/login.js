var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require("../models/userSchema");
var loginUser = require('../api/login');
var router = express.Router()

var jsonParser = bodyParser.json()
// Log user in, assume app is already connected to the database
router.get('/login', function(req, res) {
  if (!req.body) return res.send( ({"status" : "fail",
                                   "data" : "No data sent"}); )
  res.send(login.login(req.body.username, req.body.password))
});

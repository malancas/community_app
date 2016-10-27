var express = require('express');
var mongoose = require('mongoose');
var User = mongoose.model('User', userSchema);
var router = express.Router()

// Log user in, assume app is already connected to the database
router.get('/login', function(req, res) {
  User.find({ name: /^fluff/ }, callback);
});

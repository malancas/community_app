// https://stormpath.com/blog/tutorial-build-rest-api-mobile-apps-using-node-js
var express = require('express')
var mongoose = require('mongoose')

var app = express()
 
// Add user handler
app.post('/user', function(req, res) {
  //res = registerUser(parsedData)
})

// Get user information
app.get('/user', function(req, res) {
  //res = getUser(parsedData)
})
 

// Edit user handler
app.put('/user', function(req, res) {
  //res = editUser(parsedData)
})

// Add question to user account
app.post('/question', function(req, res) {
  // parse req and run addQuestion using parsed data
  //res is response
  //res = addQuestion(parsedData)
})

// Edit question
app.put('/question', function(req, res) {
  //parse req and run editQuestion using parsed data
  //res is reponse/return value of editQuestion
})

// Delete question
app.delete('/question', function(req, res) {
  //parse req and run deleteQuestion using parsed data
  //res is reponse/return value of deleteQuestion
})

// Connect to the communitydb database running on the local server
mongoose.connect('mongodb://localhost/communitydb');

// Told express to listen to HTTP requests on port 3000
app.listen(3000)

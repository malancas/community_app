var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
<<<<<<< HEAD
var users = require('./routes/users');
=======
//var users = require('./routes/users');
var mongoose = require('mongoose');
>>>>>>> f559a071cb81db6cd9ee5020f04e06c295b00a6c

var app = express();


var mongoose = require('mongoose');
var users = require('./models/userSchema');
var Question = require('./models/questionSchema');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbcoll');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//app.use('/users', users);
<<<<<<< HEAD


/*--------------api functions--------------------*/

//USER DISPLAY
app.get('/users', function(req, res) {
   mongoose.model('User').find(function (err,User){
      res.send(User);
      console.log(User);
   });
});

//REGISTER USER
var registerAPI = require('./api/registerUser');
app.get('/register', function(req, res) {
   registerAPI.registerUser('mary', 'password', 'email1');
});

//LOGIN USER
var loginAPI = require('./api/loginUser');
app.get('/login', function (req, res) {
   loginAPI.loginUser('mary','password');
});

//ADD QUESTION
var questionAPI = require('./api/addQuestion');
app.get('/question', function(req, res) {
   questionAPI.addQuestion('mary', 'test', 'descript','category');
});

app.get('/posts', function(req, res) {
   mongoose.model('Question').find(function (err, Question) {
      res.send(Question);
      console.log(Question);
   })
})




=======
>>>>>>> f559a071cb81db6cd9ee5020f04e06c295b00a6c

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

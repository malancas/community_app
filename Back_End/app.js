// includes server and app
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
//var users = require('./routes/users');
var mongoose = require('mongoose');

var app = express();
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:3000/communitydb')

// development only
/*
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  mongoose.connect('address to db');
}
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Will handle the url requests and pass them along
// to the correct router function
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler will print stacktrace
if(app.get('env') === 'development'){
  app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(8080, ()=> { console.log('Express server listening on port 8080') })

module.exports = app;

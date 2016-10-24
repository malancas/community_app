var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/commapp');
var db = mongoose.connection;
module.exports = db;

/*
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
*/

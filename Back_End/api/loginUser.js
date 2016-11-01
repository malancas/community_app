var mongoose = require('mongoose');
var User = require('../models/userSchema');

//mongoose.connect('mongodb://localhost/community1');


//takes in username and password
function loginUser(uname, pword){
   //seraches by username whichis unique and retrieves it
   User.findOne({ 'username' : uname }, 'username password admin questions', function (err, User) {
      if (err) return handleError(err);
      console.log(pword);
      //compares the retrived user password with input password
      if (User.password === pword) {
         console.log("success");
         return
         ({
            "status": "success",
            "data" : {
               "post" : {"username": User.username,
                        "password" : User.password}
            }
            //username: user.username,
            //admin:    user.admin,
            //questions:user.questions
         });
      }
      //if password does not match will not return the retrieved user to
      //front end
      if(User.password != pword) {
         console.log("failed");
         return
         ({
            "status": "fail",
            "data": {
               "post" :  "Password is incorrect"
            }
         });
      }
   });
}

module.exports = {
   loginUser: loginUser
}

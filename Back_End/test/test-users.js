var chai = require("chai");
var should = chai.should();
var chaiHttp = require("chai-http");
var should = chai.should();
var registerRoute = ("../routes/register");
var registerApi = ("../api/register");

chai.use(chaiHttp);

describe('addQuestion', function() {
  it('should register a new user on /register PUT', function(done) {
    chai.request(registerApi)
    chai.request(registerRoute)
      .put('/register')
      .end(function(err, res) {
        res.should.be.json;
        done();
    })
    });
});

// http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/

var chai = require("chai");
var chaiHttp = require("chai-http");
var expect = chai.expect();
var should = chai.should();
var server = require('../app');

chai.use(chaiHttp);

describe('/PUT register', function() {
  it('should register a new user on /register PUT', function(done) {
    chai.request(server)
      .put('/register')
      .send({"username": "sampleName", "password": "temp"})
      .end(function(err, res) {
        console.log(res.body)
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        done();
      });
  });
});

/*
describe('/POST login', function() {
  it('should login a user on /login POST', function(done) {
    chai.request(server)
      .put('/login')
      .send({"username": "sampleName", "password": "temp"})
      .end(function(err, res) {
        console.log(res.body)
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('SUCCESS');
        done();
      });
    });
});
*/
// http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/

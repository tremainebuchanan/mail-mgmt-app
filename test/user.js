/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

describe('Users Endpoint', () => {
  it('Should GET all users', (done) => {
    chai.request(app).get('/users').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(1);
      done();
    });
  });
});

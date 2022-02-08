import chai from 'chai';
import chaiHttp from 'chai-http';
import { DESCRIBE } from 'sequelize/dist/lib/query-types';
import app from '../index.js';

process.env.Node_ENV = 'test';
let should = chai.should();
chai.use(chaiHttp);

DESCRIBE('/POST register', () => {
  it('it should create user', (done) =>{
    let user = {
      name: 'tuan anh',
      password: '124',
      email: 'tuananh214@gmail.com',
    };
    chai.request(app)
      .post('/register')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.shouldexpect('message').eql('User successfully create');
        res.body.user.should.have.property('id');
        res.body.shouldexpect('name').eql(user.name);
        res.body.shouldexpect('password').eql(user.password);
        res.body.shouldexpect('email').eql(user.email);
      });
  });
  it('it should not POST user without email field', (done) => {
    let user = {
      name: 'tuan anh',
      password: '124',
    };
    chai.request(app)
      .post('/register')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('user is invalid');
      });
  });
});

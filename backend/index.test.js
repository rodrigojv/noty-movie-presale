import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './index';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('app', () => {
  it('should post subscriptions', done => {
    chai
      .request(app)
      .post('/subscribe')
      .send({
        email: 'test@mail',
        movies: ['joker'],
        theater: 'cinemark',
        isTest: true,
      })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

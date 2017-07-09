var app = require('./app');
var request = require('supertest');

describe('[GORILAS]', () => {

  it('should pick all gorillas', (done) => {
    request(app).get('gorillas')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((error, resp) => {
      expect(resp.body).to.be.an('array');
      done();
    });
  });

  it('shoul create new gorilla', (done) => {
    request(app).post('/gorillas').send({
      name: 'Thade',
      age: '8',
      clan: 'generals'
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    expect(201) // or 200 no difference
    .end((error, resp) => {
      expect(resp.body).to.be.an('object');
      done();
    });

  })
});

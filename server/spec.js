var app = require('./app');
var request = require('supertest');
var expect = require('chai').expect;

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

  it('should create new gorilla', (done) => {
    request(app).post('/gorillas').send({
      name: 'Thade',
      age: 8,
      gender: 'male',
      clan: 'generals'
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    expect(201) // or 200 no difference
    .end((error, resp) => {
      expect(resp.body).to.be.an('object');
      done();
    });
  });

  it('should delete a gorilla', (done) => {
    request(app).post('/gorillas').send({
      id: 1,
      name: 'test gorilla',
      age: 10,
      gender: 'male',
      clan: 'any'
    })
    .set('Accept', 'application/json')
    .end((error, resp) => {
      let delete_gorila = resp.body;
      request(app).delete('/gorillas/' + delete_gorila.id)
      .end((error, resp) => {
        expect(resp.body).to.eql(delete_gorila);
        done();
      });
    })
  });

});

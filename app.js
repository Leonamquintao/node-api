var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

/**
 * CRUD Operations:
 * Create/Read/Update/Destroy or Delete
*/

//this statement will search inside de 'client' folder
//and look for any file with the name of index.html
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var id = 0;
var gorillas = [];

//Middleware function that`s check the id before store
var idHandler = (request, response, next) => {
  if(!request.body.id) {
    id++;
    request.body.id = id + '';
  }
  next();
};

// function that will be used always when a endpoint
// have the 'id' param : '/gorillas/:id'
app.param('id', (request, response, next, id) => {
  let gorilla = gorillas.find(gorillas, { id: id });

  if(!gorilla) {
    request.send();
  }

  request.gorilla = gorilla;
  next();
});

/*-------------------------- Routes Area ---------------------------------------*/

app.get('/gorillas', (request, response) => {
  response.json(gorillas);
});

app.post('/gorillas', idHandler, (request, response) => {
  let new_gorilla = request.body;
  gorillas.push(new_gorilla);
  response.json(gorillas);
});

app.get('/gorillas/:id', (request, response) => {
  response.json(gorilla || {});
});

app.put('gorillas/:id', (request, response) => {

});

/*-------------------------- End Routes Area ---------------------------------------*/

//simple error handler middleware
app.use((request, response, error, next) => {
  if(error) {
    console.log(error.message);
    request.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(' ---------- Gorilla`s server running in port: '+port+ ' ----------');
});

//module.exports = app;

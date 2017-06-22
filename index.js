var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

/**
 * CRUD Operations:
 * Create/Read/Update/Destroy or Delete
*/

//this statement will search inside de 'client' folder
//and look for any file with the name of index.html
app.use(express.static('client'));

//app.use((request, response, next) => {
//  console.log('first middleware');
//  next();
//response.send() to send stuff
//});

//custom middleware
//var checkAuth = require('./utils/checkAuth');
//app.get('/some-api-call', checkAuth(), (request, response) => {
//do some stuff if is auth...
//})

var gorillas = [{ name: 'General Thade', age: 08, clan: 'tribal warriors' }];
var id = 0;


// function that will be used always when a endpoint
// have the 'id' param : '/gorillas/:id'
app.param('id', (request, response, next, id) => {
  let gorilla = gorillas.find(gorillas, { id: id });

  if(!gorilla) {
    request.send();
  }

  request.gorilla = gorilla;
  next();

})

app.get('/', (request, response) => {
  let json_data = { name: 'Leonam Rodrigo', age: 33, clan: 'Developer' };
  response.json(json_data);
});

app.post('/gorillas', (request, response) => {
  let new_gorilla = request.body;
  id++;
  new_gorilla.id = id + '';
  gorillas.push(new_gorilla);
})

app.get('/gorillas/:id', function(request, response) {
  //var gorilla = gorillas.find(gorillas, { id: request.params.id });
  response.json(gorilla || {});

});

app.listen(port, () => {
  console.log(' ---------- gorilla server running in port: '+port+ ' ----------');
});

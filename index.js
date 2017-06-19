var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

/**
 * CRUD Operations:
 * Create
 * Read
 * Update
 * Destroy or Delete
*/

//this statement will search inside de client folder
//and look for any file with the name of index.html
//app.use(express.static('client'));

var users = [{ name: 'root user', age: 00, role: 'Admin user' }];
var id = 0;

app.get('/', (request, response) => {
  let json_data = { name: 'Leonam Rodrigo', age: 33, role: 'Developer' };
  response.json(json_data);
});

app.post('/users', (request, response) => {
  let new_user = request.body;
  id++;
  new_user.id = id + '';
  users.push(new_user);
})

app.get('/users/:id', function(request, response) {
  var user = users.find(users, { id: request.params.id });
  response.json(user || {});

});

app.listen(port, () => {
  console.log(' ---------- server running in port: '+port+ ' ----------');
});

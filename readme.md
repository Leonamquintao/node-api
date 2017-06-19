## Basic anatomy os a REST API

This is an example of api developed in node.js
Created for studies, but feel free to use ...

### Blueprint

```{
  'GET /users': {
    'desc': 'return all users',
    'response': '200 application/json',
    'data': []
  }
},
{
  'GET /users/:id': {
    'desc': 'return one user based on his id',
    'response': '200 application/json',
    'data': {}
  }
},
{
  'POST /users': {
    'desc': 'create and returns a new user',
    'response': '201 application/json',
    'data': {}
  }
},
{
  'PUT /users/:id': {
    'desc': 'update and returns the user based on his id',
    'response': '201 application/json',
    'data': {}
  }
},
{
  'DELETE /users/:id': {
    'desc': 'delete and returns the user based on his id',
    'response': '200 application/json',
    'data': {}
  }
},```

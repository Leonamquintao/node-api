## Basic anatomy os a REST API

This is an example of api developed in node.js
Created for studies, but feel free to use ...

### Blueprint

```.
{
  'GET /gorillas': {
    'desc': 'return all gorillas',
    'response': '200 application/json',
    'data': []
  }
},
{
  'GET /gorillas/:id': {
    'desc': 'return one gorilla based on his id',
    'response': '200 application/json',
    'data': {}
  }
},
{
  'POST /gorillas': {
    'desc': 'create and returns a new gorilla',
    'response': '201 application/json',
    'data': {}
  }
},
{
  'PUT /gorillas/:id': {
    'desc': 'update and returns the gorilla based on his id',
    'response': '201 application/json',
    'data': {}
  }
},
{
  'DELETE /gorillas/:id': {
    'desc': 'delete and returns the gorilla based on his id',
    'response': '200 application/json',
    'data': {}
  }
},
```

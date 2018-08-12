const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let todos = [
  {
    title: 'Learn Backend',
    completed: false
  },
  {
    title: 'Learn to learn',
    completed: true
  },
  {
    title: 'Learn to just not copy/paste things...',
    completed: true
  }
];

app.get('/', function(request, response){
  response.sendFile('index.html');
})

app.get('/todos', function(request, response) {
  const limit = request.query.limit;
  if(limit){
    const limitedArray = todos.slice(0, limit);
    response.send(limitedArray);
  }
  response.send(todos);
});

app.post('/todos', function (request, response) {
  todos.push(request.body);
  response.send(todos);
});

app.get('/todos/:id', function (request, response) {
  const todoID = parseInt(request.params.id, 10);
  const selectedItem = todos[todoID];
  res.send(selectedItem);
});

app.delete('/todos/:id', function (request, response) {
  const todoID = parseInt(request.params.id, 10);
  const filteredListOfTodos = todos.filter(function (todo, index){
    return index !== todoID;
  })
  todos = [...filteredListOfTodos];
  response.send(todos);
});

app.patch('/todos/:id', function (request, response) {
  const patchedTodo = request.body;
  const todoID = parseInt(request.params.id, 10);
  const patchedListOfTodos = todos.map(function (todo, index){

    if(index === todoID){
      return patchedTodo;
    }
    return todo;
  })
  todos = [...patchedListOfTodos];
  response.send(todos);
});


app.listen(3000);
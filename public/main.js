const output = document.querySelector('.output');
const newTodoInput = document.getElementById('newTodoInput');
const submitNewTodoButton = document.querySelector('.submitNewTodoButton');
const newTodoForm = document.querySelector('.newTodoForm');
let todoDOM;


function fetchAllTodos(){
  todoDOM = '';
    
  fetch('/todos')
    .then((response) => response.json())
    .then((todos) => {
      console.log(todos);
      todos.map(todo => {
          todoDOM += `
            <div>${todo.title}</div>
        `;
      });
      output.innerHTML = todoDOM; 
  });
}

function createNewTodo(){
    event.preventDefault();
    
    const newTodo = { 
        title: newTodoInput.value,
        completed: false
    };

    fetch('/todos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      });
    
    newTodoForm.reset();
    fetchAllTodos();
}

submitNewTodoButton.addEventListener('click', createNewTodo);

fetchAllTodos();




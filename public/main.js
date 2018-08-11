

const output = document.querySelector('.output');
const fetchButton = document.querySelector('.fetchButton');

output.textContent = 'Tjaba!';

function fetchAllTodos(){
  fetch('/todos')
    .then((response) => response.json())
    .then(console.log);
}

fetchButton.addEventListener('click', fetchAllTodos);


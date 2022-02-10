import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

//* Tags html
const ulHTML = document.querySelector(".tarefas");
const inputHTML = document.querySelector("input");
const buttonHTML = document.querySelector("button");
const footerHTML = document.querySelector("footer");

// localStorage.todoLista = JSON.stringify([]); //* guardar dados no localstorage
let todoLista = JSON.parse(localStorage.todoLista); //* Obter dados do localstorage

//* Adicionar tarefas
buttonHTML.addEventListener("click", addTodo); 
function addTodo(){
  if(inputHTML.value.trim() != 0){
    todoLista.push(inputHTML.value);
    localStorage.todoLista = JSON.stringify(todoLista);
    inputHTML.value = "";
  } 
  show();
}

//* Remover tarefas
window.removeTarefa = removeTarefa;
function removeTarefa(index){ 
  todoLista.splice(index, 1);
  localStorage.todoLista = JSON.stringify(todoLista);
  show();
}

//* Mostrar na tela
function show(){
  ulHTML.innerHTML = ""
  todoLista.map(function(tarefa, index){
    ulHTML.innerHTML += `
    <li class="shadow-none bg-light rounded border-bottom">
      <span> ${tarefa}</span><span class="remove btn btn-danger" onclick="removeTarefa(${index})";><i class="bi bi-trash3"></i></span>
    </li>`;
  })
  
  footerHTML.innerHTML = (todoLista.length > 1) ? `Você tem ${todoLista.length} tarefas` : `Você tem ${todoLista.length} tarefa`;
}
show();


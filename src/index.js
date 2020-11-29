import { TodoList } from './classes/todo-list.class';
import { crearToDoHtml } from './js/componentes.js';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach( crearToDoHtml );

console.log( todoList );

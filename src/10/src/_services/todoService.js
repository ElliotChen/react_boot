import {store} from '../_helpers/storeHelper';
import {Model} from '../_model';

const API = 'http://localhost:3000/Todos';

export const todoService = {
	loadAllTodos,
	removeTodo,
	pureFetchAllTodos,
	pureRemoveTodo
}

function loadAllTodos(next, reject) {
	console.log('load all todos in service');
	fetch(API)
		.then(response => response.json())
		.then(next)
		.catch(reject);
}


function removeTodo(todo, next, reject) {
	fetch(API + '/' + todo.id, {method:'delete'})
		.then(response => response.json())
		.then(data => {loadAllTodos(next,reject)})
		.catch(reject);
}


async function pureFetchAllTodos() {
	try {
		const response = await fetch(API);
		const data = await response.json();
		console.log(`pure fetch -- ${data}`);
		return data;
	} catch (error) {
		return [{... Model.Todo}];
	}
}

async function pureRemoveTodo(todo) {
	try {
		const response = await fetch(API + '/' + todo.id, {method:'delete'});
		const data = await response.json();
		console.log(`pure remove -- ${data}`);
		return data;
	} catch (error) {
		return [{... Model.Todo}];
	}
}
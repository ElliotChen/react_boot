import {todoConstants} from '../_constants';

export const todoActions = {
	loadAllTodos,
	addTodo,
	removeTodo
};

function loadAllTodos() {
	return {
		type : todoConstants.LOAD_ALL
	}
}

function addTodo(todo) {
	return {
		type : todoConstants.ADD_TODO,
		todo
	}
}

function removeTodo(todo) {
	return {
		type : todoConstants.REMOVE_TODO,
		todo
	}
}
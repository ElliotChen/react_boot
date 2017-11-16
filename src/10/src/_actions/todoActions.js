import {todoConstants} from '../_constants';

import {todoService} from '../_services';

export const todoActions = {
	showLoading,
	listTodos,
	finishLoading,
	thunkListTodos,
	thunkRemoveTodo
};

function showLoading() {
	return {
		type : todoConstants.SENDING_REQUET,
		loading : true
	}
}

function listTodos(todos) {
	return {
		type : todoConstants.LOAD_ALL,
		loading : false,
		todos
	}
}

function finishLoading() {
	return {
		type : todoConstants.FINISHED_REQUEST,
		loading : false
	}
}


function thunkListTodos() {
	return async (dispatch, getState) => {
			console.log("invoked thunkListTodos");
			dispatch(showLoading());

			let todos = await todoService.pureFetchAllTodos();

			dispatch(listTodos(todos));
		};
}


function thunkRemoveTodo(todo) {
	return async (dispatch, getState) => {
		console.log("invoked thunkRemoveTodo");
		dispatch(showLoading());
		await todoService.pureRemoveTodo(todo);
		let todos = await todoService.pureFetchAllTodos();

		dispatch(listTodos(todos));
	};
}

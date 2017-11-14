import {todoConstants} from '../_constants';

export const todoActions = {
	showLoading,
	listTodos,
	finishLoading
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
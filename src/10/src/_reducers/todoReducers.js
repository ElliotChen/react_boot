import {todoConstants} from '../_constants';

let initState = {loading:false, todos:[]};

function todoReducers(state = initState, action) {
	console.log(`[${action.type}] -- Original State is  1. ${state.loading} 2. ${state.todos}`);

	switch (action.type) {
		case todoConstants.SENDING_REQUET:
			return {
				...state,
				loading: action.loading
			};
		case todoConstants.LOAD_ALL:
			return {
				...state,
				todos: action.todos,
				loading: action.loading
			};
		case todoConstants.FINISHED_REQUEST:
			return {
				...state,
				loading: action.loading
			};
		case todoConstants.ADD_TODO:
			return state;
		case todoConstants.REMOVE_TODO:
			return state;
		default:
			return state;
	}

}

export {todoReducers};
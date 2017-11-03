import {todoConstants} from '../_constants';

let initState = [{}];

export function todoReducers(state = initState, action) {
	switch (action.type) {
		case todoConstants.LOAD_ALL:
		case todoConstants.ADD_TODO:
		case todoConstants.REMOVE_TODO:
		default:
			return state;
	}

}
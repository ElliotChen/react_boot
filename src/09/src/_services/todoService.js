import {store} from '../_helpers/storeHelper';

const API = 'http://localhost:3000/Todos';

export const todoService = {
	loadAllTodos
}

function loadAllTodos(setState, state) {
	setState((state) => {return {loading:true}});
	console.log(this.props.store);
	fetch(API)
		.then(response => response.json())
		.then(data => {
			setState(state => {return {loading:false, todos:data}});
		}).catch(data => {
		setState(state => {return {loading:false}});
	});
}
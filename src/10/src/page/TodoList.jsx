import React from 'react';
import {connect} from 'react-redux';
import {TodoListItem} from './TodoListItem';
import {todoService} from '../_services'
import {todoConstants} from '../_constants';
import {todoActions} from '../_actions';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		/*
		this.state = {
			loading:false,
			todos:[]
		}
		*/
	}

	componentDidMount() {

		/*
		this.props.showLoading();
		todoService.loadAllTodos(this.props.listTodos, this.props.finishLoading);
		*/

		//this.asyncLoad();

		this.props.thunkListTodos();

	}


	asyncLoad = async () => {


		this.props.showLoading();

		const todos = await todoService.pureFetchAllTodos();

		console.log(`-------${todos}`);
		this.props.listTodos(todos);
		this.props.finishLoading();
		/*

		*/
	}


	listItem = (item) => {
		return(<TodoListItem key={item.id} item={item}/>);
	}

	renderLoading = () => {
		return (
			<div>
				<h2>Todo List</h2>
				---loading!!!!
			</div>
		);
	}

	renderOrderItems = (todos) => {
		return (
			<div>
				<h2>Todo List</h2>
				{todos.map(this.listItem)}
			</div>
		);
	}

	render() {
		//const {loading, todos} = this.state;
		console.log(this.props);
		const {loading, todos} = this.props;

		console.log(`render - loading:${loading}`);
		console.log(`todos - todos:${todos}`);
		return loading? this.renderLoading() : this.renderOrderItems(todos);
	}
}

async function asyncLoad() {
	console.log("do async");
}

function mapStateToProps(state) {
	console.log(`mapping state - ${state.todoState.loading} and ${state.todoState.todos} to Property`);
	return {
		loading : state.todoState.loading,
		todos : state.todoState.todos
	};
}

function mapDispatchToProps(dispatch) {
	return {
		showLoading : () => {
			dispatch(todoActions.showLoading());
		},
		listTodos : (todos) => {
			dispatch(todoActions.listTodos(todos));
		},
		finishLoading : () => {
			dispatch(todoActions.finishLoading());
		},
		thunkListTodos : () => {
			dispatch(todoActions.thunkListTodos());
		}
	};
}

const ReduxTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export {ReduxTodoList as TodoList};
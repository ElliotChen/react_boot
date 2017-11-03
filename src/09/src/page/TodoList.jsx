import React from 'react';

import TodoListItem from './TodoListItem';
import {todoService} from '../_services'
const API = 'http://localhost:3000/Todos';

class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading:false,
			todos:[]
		}
	}

	componentDidMount() {
		//todoService.loadAllTodos(this.setState, this.state);

		this.setState({loading:true});
		console.log(this.props.store);
		fetch(API)
			.then(response => response.json())
			.then(data => {
				this.setState({loading:false, todos:data});
			}).catch(data => {
			this.setState({loading:false});
		});
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
		const {loading, todos} = this.state;
		return loading? this.renderLoading() : this.renderOrderItems(todos);
	}
}

export default TodoList;
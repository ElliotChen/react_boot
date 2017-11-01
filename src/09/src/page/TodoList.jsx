import React from 'react';

import TodoListItem from './TodoListItem';

const API = 'http://localhost:3000/Todos';

class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos:[{id:1,name:"123"}]
		}
	}

	componentDidMount() {
		fetch(API)
			.then(response => response.json())
			.then(data => {this.setState({todos:data})});
	}

	listItem = (item) => {
		return(<TodoListItem key={item.id} item={item}/>);
	}

	render() {
		const {todos} = this.state;
		return(
			<div>
				<h2>Todo List</h2>
				{todos.map(this.listItem)}
			</div>);
	}
}

export default TodoList;
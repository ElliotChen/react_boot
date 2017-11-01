/**
 * Created by elliot on 10/05/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './page/TodoForm';
import TodoList from './page/TodoList';

class App extends React.Component {
	render() {
		const todos = [{id:1,name:'123'}, {id:2,name:'234'}];
		return (
			<div>
				<TodoForm/>
				<TodoList todos={todos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('main'));
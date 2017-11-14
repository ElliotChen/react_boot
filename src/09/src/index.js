/**
 * Created by elliot on 10/05/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import TodoForm from './page/TodoForm';
import {TodoList} from './page/TodoList';

import {store} from './_helpers/storeHelper';

class App extends React.Component {
	render() {
		console.log(store);
		return (
			<div>
				<TodoForm/>
				<TodoList/>
			</div>
		);
	}
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main'));
import React from 'react';

class TodoForm extends React.Component {
	render() {
		return(
			<div>
				<h2>Form</h2>
				<form>
					<input type="text"/>
					<button type="button">Add</button>
				</form>
			</div>);
	}
}

export default TodoForm ;
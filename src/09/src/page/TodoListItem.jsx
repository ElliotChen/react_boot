import React from 'react';
import ReactDOM from 'react-dom';

class TodoListItem extends React.Component {
	render() {
		const {item} = this.props;
		return(
			<div className="row">
				<div className="col-md-2">{item.name}</div>
				<div className="col-md-1">
					<button type="button">Delete</button>
				</div>
			</div>);
	}
}

export default TodoListItem;
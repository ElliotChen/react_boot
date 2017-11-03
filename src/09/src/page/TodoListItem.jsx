import React from 'react';
import { Button } from 'reactstrap';

class TodoListItem extends React.Component {
	render() {
		const {item} = this.props;
		return(
			<div className="row">
				<div className="col-md-2">{item.name}</div>
				<div className="col-md-1">
					<Button color="danger">Delete</Button>
				</div>
			</div>);
	}
}

export default TodoListItem;
import React from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {todoService} from '../_services'
import {todoConstants} from '../_constants';
import {todoActions} from '../_actions';

class TodoListItem extends React.Component {

	handleSubmit = (event) => {
		const {item} = this.props;
		console.log(item);
		/*
		this.props.showLoading();
		todoService.removeTodo(item, this.props.listTodos,this.props.finishLoading);
		*/

		this.asyncRemoveTodo(item);
	}

	asyncRemoveTodo = async (item) => {
		this.props.showLoading();
		await todoService.pureRemoveTodo(item);
		const todos = await todoService.pureFetchAllTodos();
		this.props.listTodos(todos);
		this.props.finishLoading();
	}

	render() {
		const {item} = this.props;
		return(
			<div className="row">
				<div className="col-md-2">{item.name}</div>
				<div className="col-md-1">
					<Button color="danger" onClick={this.handleSubmit}>Delete</Button>
				</div>
			</div>);
	}
}
function mapStateToProps(state) {
	return {

	}
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
		}
	};
}

const ReduxTodoListItem = connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
export {ReduxTodoListItem as TodoListItem};
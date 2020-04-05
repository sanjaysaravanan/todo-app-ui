import React, { useState, useEffect } from "react";
import { retrieveAllTodos, deleteTodo } from "../../api/todo/ToDoDataService";
import { getLoggedInUser } from "./AuthenticationService";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";

function ListToDo() {
	const [todos, setTodos] = useState([]);
	const [message, setMessage] = useState(null);

	const history = useHistory();

	useEffect(() => {
		refreshTodos();
	}, []);

	const refreshTodos = () => {
		let userName = getLoggedInUser();
		retrieveAllTodos(userName)
			.then(res => setTodos(res.data))
			.catch(error => console.log(error));
	};

	const deleteTodoClicked = id => {
		let userName = getLoggedInUser();
		deleteTodo(userName, id).then(response => {
			setMessage(`Deletion of todo ${id} Successfull`);
			refreshTodos();
		});
	};

	const addTodoClicked = () => {
		history.push(`/todos/${-1}`);
	};

	const updateTodoClicked = id => {
		console.log("Update " + id);
	};

	return (
		<div>
			<h1>ToDo List</h1>
			{message && <div className="alert alert-success">{message}</div>}
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th>Description</th>
							<th>Target Date</th>
							<th>Completed</th>
							<th>Update</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{todos.map(todo => (
							<tr key={todo.id}>
								<td>{todo.description}</td>
								<td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
								<td>{todo.done.toString()}</td>
								<td>
									<Link to={`/todos/${todo.id}`}>
										<button
											className="btn btn-success"
											onClick={() => updateTodoClicked(todo.id)}
										>
											Update
										</button>
									</Link>
								</td>
								<td>
									<button
										className="btn btn-warning"
										onClick={() => deleteTodoClicked(todo.id)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="row">
					<button className="btn btn-success" onClick={() => addTodoClicked()}>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

export default ListToDo;

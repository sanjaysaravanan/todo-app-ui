import React, { useState, useEffect } from "react";
import { retrieveAllTodos } from "../../api/todo/ToDoDataService";
import { getLoggedInUser } from "./AuthenticationService";

function ListToDo() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		let userName = getLoggedInUser();
		console.log(userName);
		retrieveAllTodos(userName)
			.then(res => setTodos(res.data))
			.catch(error => console.log(error));
	}, []);

	return (
		<div>
			<h1>ToDo List</h1>
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th>Description</th>
							<th>Target Date</th>
							<th>Completed</th>
						</tr>
					</thead>
					<tbody>
						{todos.map(todo => (
							<tr key={todo.id}>
								<td>{todo.description}</td>
								<td>{todo.targetDate.toString()}</td>
								<td>{todo.done.toString()}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default ListToDo;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HelloBeanPathService } from "../../api/todo/HelloWorldService";

export default function WelcomeComponent(props) {
	const [message, setMessage] = useState("");

	const retrieveWelcomeMessage = () => {
		HelloBeanPathService(props.match.params.name)
			.then(res => setMessage(res.message))
			.catch(error => handleError(error));
	};

	const handleError = error => {
		let errorMessage = "";

		if (error.message) errorMessage += error.message;

		if (error.response && error.response.data) {
			errorMessage += error.response.data.message;
		}

		setMessage(errorMessage);
	};

	return (
		<>
			<h1>Welcome !!!</h1>
			<div className="container">
				<h3>Welcome To ToDo Application, {props.match.params.name}</h3>
				<h4>
					Manage Your ToDos <Link to="/todos">Here</Link>
				</h4>
			</div>
			<div className="container">
				Click here to get a customized welcome message.
				<button onClick={retrieveWelcomeMessage} className="btn btn-success">
					Get Welcome Message
				</button>
			</div>
			<div>{message}</div>
		</>
	);
}

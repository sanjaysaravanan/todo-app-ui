import React from "react";
import { Route, Switch } from "react-router-dom";

import HeaderComponent from "../../components/Header/HeaderComponent";
import ListToDo from "../../containers/ListTodo/ListToDo";
import ListToDo2 from "../../containers/ListTodo/ListToDo2";
import WelcomeComponent from "../../components/Welcome/WelcomeComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import ErrorComponent from "../../components/AuthenticatedRoute/ErrorComponent";
import ToDoComponent from "../../components/ToDo/ToDoComponent";

export default function() {
	return (
		<div className="ToDoApp">
			<HeaderComponent />
			<Switch>
				<Route
					exact
					path="/todoapp/welcome/:name"
					component={WelcomeComponent}
				/>
				<Route exact path="/todoapp" component={WelcomeComponent} />
				<Route exact path="/todoapp/todos" component={ListToDo} />
				<Route exact path="/todoapp/todos2" component={ListToDo2} />
				<Route exact path="/todoapp/todos/:id" component={ToDoComponent} />
				<Route path="*" component={ErrorComponent} />
			</Switch>
			<FooterComponent />
		</div>
	);
}

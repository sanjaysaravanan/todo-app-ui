import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderComponent from "../../components/Header/HeaderComponent";
import AuthenticatedRoute from "../../components/AuthenticatedRoute/AuthenticatedRoute";
import LoginComponent from "../../components/Login/LoginComponent";
import LogoutComponent from "../../components/Logout/LogoutComponent";
import ListToDo from "../../containers/ListTodo/ListToDo";
import WelcomeComponent from "../../components/Welcome/WelcomeComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import ErrorComponent from "../../components/AuthenticatedRoute/ErrorComponent";
import ToDoComponent from "../../components/ToDo/ToDoComponent";

export default function() {
	return (
		<div className="ToDoApp">
			<Router>
				<HeaderComponent />
				<Switch>
					<Route path="/" exact component={LoginComponent} />
					<Route path="/login" component={LoginComponent} />
					<AuthenticatedRoute path="/logout" component={LogoutComponent} />
					<AuthenticatedRoute
						path="/welcome/:name"
						component={WelcomeComponent}
					/>
					<AuthenticatedRoute exact path="/todos" component={ListToDo} />
					<AuthenticatedRoute
						exact
						path="/todos/:id"
						component={ToDoComponent}
					/>
					<Route path="" component={ErrorComponent} />
				</Switch>
				<FooterComponent />
			</Router>
		</div>
	);
}

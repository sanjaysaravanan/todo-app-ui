import React from "react";
import "./App.css";

import ToDoApp from "../src/pages/ToDoApp/ToDoApp";
import LoginComponent from "../src/components/Login/LoginComponent";
import AuthenticatedRoute from "../src/components/AuthenticatedRoute/AuthenticatedRoute";
import LogoutComponent from "../src/components/Logout/LogoutComponent";
import Website from "../src/pages/Website/Website";
import Sample from "../src/pages/sample";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Website} />
					<Route exact path="/sample" component={Sample} />
					<Route path="/sanjaysaravanan" component={Website} />
					<Route exact path="/login" component={LoginComponent} />
					<AuthenticatedRoute path="/todoapp" component={ToDoApp} />
					<Route exact path="/logout" component={LogoutComponent} />
					<Route
						path="*"
						render={() => (
							<div
								style={{
									height: "100vh",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									fontSize: "3em",
									color: "#cecece"
								}}
							>
								No Found
							</div>
						)}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

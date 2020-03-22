import React from "react";
import { withRouter, Link } from "react-router-dom";

import { logoutUser, isUserLoggedIn } from "./AuthenticationService";

function HeaderComponent() {
	const isLoggedIn = isUserLoggedIn();

	return (
		<header>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<div>
					<a href="https://covidout.in" className="navbar-brand">
						ToDo Application
					</a>
				</div>
				<ul className="navbar-nav">
					{isLoggedIn && (
						<li>
							<Link to="/welcome/SanjaySaravanan" className="nav-link">
								Home
							</Link>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<Link to="/todos" className="nav-link">
								ToDos
							</Link>
						</li>
					)}
				</ul>
				<ul className="navbar-nav navbar-collapse justify-content-end">
					{!isLoggedIn && (
						<li>
							<Link to="/login" className="nav-link">
								Login
							</Link>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<Link to="/logout" className="nav-link" onClick={logoutUser}>
								Logout
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}

export default withRouter(HeaderComponent);

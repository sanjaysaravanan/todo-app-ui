import React from "react";

import { Route, Switch } from "react-router-dom";

import PageSelector from "../../containers/PageSelector/PageSeletor";
import Home from "../../components/Website/Home/Home";
import Footer from "../../components/Website/Footer/Footer.js";
import classes from "./Website.module.css";

export default function() {
	return (
		<div className={classes.root}>
			<div className={classes.main}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/sanjaysaravanan" component={Home} />
					<Route exact path="/sanjaysaravanan/:tab" component={PageSelector} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

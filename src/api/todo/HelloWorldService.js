import React from "react";
import axios from "axios";

export default function HelloWorldService() {
	return <h1>Sanjay</h1>;
}

export const HelloService = () => {
	// console.log("Executed Service...");
	return axios.get("http://localhost:8080/hello-world");
};

export const HelloBeanService = () => {
	return axios.get("http://localhost:8080/hello-world-bean");
};

export const HelloBeanPathService = name => {
	return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
};

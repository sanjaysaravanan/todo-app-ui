import axios from "axios";

export const retrieveAllTodos = name => {
	return axios.get(`http://localhost:8080/users/${name}/todos`);
};

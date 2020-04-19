import { userInstance } from "../../axios.config";

export const retrieveAllTodos = name => {
	return userInstance.get(`/api/users/${name}/todos`);
};

export const deleteTodo = (name, id) => {
	return userInstance.delete(`/api/users/${name}/todos/${id}`);
};

export const getTodoById = (name, id) => {
	return userInstance.get(`/api/users/${name}/todos/${id}`);
};

export const updateTodo = (name, id, todo) => {
	return userInstance.put(`/api/users/${name}/todos/${id}`, todo);
};

export const createTodo = (name, todo) => {
	return userInstance.post(`/api/users/${name}/todos`, todo);
};

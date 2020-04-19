import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const userInstance = axios.create({
	baseURL: "http://localhost:8080",
	timeout: 10000,
	cancelToken: source.token
});
const res = function(response) {
	return response.data;
};
const error = function(error) {
	return Promise.reject(error);
};

userInstance.interceptors.response.use(res, error);

export { userInstance };

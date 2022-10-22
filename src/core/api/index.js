import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:8080/api",
});

axios.interceptors.request.use(
	(config) => {
		const apiToken = sessionStorage.getItem("token");
		if (apiToken) {
			config.headers = { "x-rapidapi-key": apiToken };
		}

		console.log("Request was sent");
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	(response) => {
		console.log("Response was received");
		return response;
	},

	async (error) => {
		if (error.response.status === 401) {
			console.log("Response Error, update token");
			const { config } = error.response;

			const response = await axios({ ...config });
			return Promise.resolve(response);
		}
		return Promise.reject(error);
	}
);

export default instance;

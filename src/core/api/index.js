import axios from "axios";

const get = ({ path, config = {} }) => axios.get(path, config);
// const post = ({ path, config = {} }) => axios.post(path, config);
// const put = ({ path, config = {} }) => axios.put(path, config);
// const del = ({ path, config = {} }) => axios.del(path, config);

const api = {
	get,
	// post,
	// put,
	// del
};

export default api;

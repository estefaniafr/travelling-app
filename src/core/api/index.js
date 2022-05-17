import axios from "axios";

const get = ({ path, config = {} }) => axios.get(path, config);

const api = { get };

export default api;

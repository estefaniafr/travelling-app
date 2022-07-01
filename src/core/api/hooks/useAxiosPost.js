import { useEffect, useState } from "react";
import api from "../../api";

const useAxiosPost = (url, payload) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await api.post(url, payload);

				setData(response.data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoaded(true);
			}
		})();
	}, []);

	return { data, error, loaded };
};

export default useAxiosPost;

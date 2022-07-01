import { useEffect, useState } from "react";
import api from "../../api";

const useAxiosGet = (url) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await api.get(url);

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

export default useAxiosGet;

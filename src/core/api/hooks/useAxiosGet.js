import { useEffect, useState } from "react";
import api from "../../api";

const useAxiosGet = (url) => {
	const [data, setData] = useState(undefined);
	const [error, setError] = useState("");
	const [loaded, setLoaded] = useState(false);
	const [fetch, setRefetch] = useState(false);

	const refetch = () => setRefetch(true);

	useEffect(() => {
		(async () => {
			try {
				const response = await api.get(url);

				setData(response.data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoaded(true);
				setRefetch(false);
			}
		})();
	}, [url, fetch]);

	return { data, error, loaded, refetch };
};

export default useAxiosGet;

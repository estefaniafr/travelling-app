import { useEffect, useState } from "react";
import api from "../../api";

const useAxiosPut = (url) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [loaded, setLoaded] = useState(false);
	const [payload, setPayload] = useState(undefined);

	useEffect(() => {
		if (payload) {
			(async () => {
				try {
					const response = await api.put(url, payload);

					setData(response.data);
				} catch (error) {
					setError(error.message);
				} finally {
					setLoaded(true);
				}
			})();
		}
	}, [payload]);

	const mutate = (body) => setPayload(body);

	return { data, error, loaded, mutate };
};

export default useAxiosPut;

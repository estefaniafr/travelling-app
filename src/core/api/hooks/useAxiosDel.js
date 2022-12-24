import { useEffect, useState } from "react";
import api from "../../api";

const useAxiosDel = (url) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [loaded, setLoaded] = useState(false);
	const [payload, setPayload] = useState(undefined);

	useEffect(() => {
		if (payload) {
			(async () => {
				try {
					setLoaded(false);
					const response = await api.delete(`${url}/${payload}`);

					setData(response.data);
				} catch (error) {
					setError(error.message);
				} finally {
					setLoaded(true);
				}
			})();
		}
	}, [payload]);

	const mutate = (id) => setPayload(id);

	return { data, error, loaded, mutate };
};

export default useAxiosDel;

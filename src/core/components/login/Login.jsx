import React from "react";
import { useFormik } from "formik";
import Box from "../Box/Box";
import api from "core/api";

const initialValues = {
	email: undefined,
	password: undefined,
};

const Login = () => {
	const formik = useFormik({
		initialValues,
		onSubmit: async (values) => {
			try {
				const isLogged = await api.post({ path: "/login" });
				if (isLogged) {
					console.log(values);
				}
			} catch (error) {
				console.log(error);
			}
		},
	});
};

import React from "react";
import { useFormik } from "formik";
import Box from "../Box/Box";
import api from "core/api";

import "./Login.css";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

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

	return (
		<Box className="login__box--container">
			<form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
				<h3>Login</h3>
				<TextField
					name="UserName"
					label="Usuario"
					onChange={formik.handleChange}
					value={formik.values.username}
				/>
				<TextField
					name="password"
					label="Contraseña"
					type="password"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>

				<Box className="login__box--buttons">
					<Button type="submit" value="Login" />
				</Box>
				<a href="#" >No tienes cuenta? Regístrate</a>
			</form>
		</Box>
	);
};

export default Login;
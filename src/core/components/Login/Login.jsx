import { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";

import useAxiosPost from "core/api/hooks/useAxiosPost";
import { UserContext } from "core/context/UserContext";
import Box from "../Box/Box";
import Button from "../Button/Button";

import "./Login.css";

const Login = ({ setToggle, userEmail, onUserLogged }) => {
	const { setUser } = useContext(UserContext);

	const { data: user, mutate, error } = useAxiosPost("/auth/login");

	useEffect(() => {
		if (error) {
			console.log("Login useEffect", error);
		}

		if (user) {
			setUser(user);
			onUserLogged(user);
		}
	}, [user, error]);

	const validateEmail = (value) => {
		let error;
		if (!value) {
			error = "Requerido";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = "No es un email valido";
		}
		return error;
	};

	const validateUsername = (value) => {
		let error;
		if (!value) {
			error = "Requerido";
		}
		return error;
	};

	const handleSubmit = (values) => {
		mutate(values);
	};

	return (
		<Formik
			initialValues={{
				email: userEmail ? userEmail : "carlos@travelling.com",
				password: "123456",
			}}
			onSubmit={handleSubmit}
		>
			{({ errors, touched, validateField, validateForm }) => (
				<Form>
					<h1>Login</h1>
					<Box className="login__field--container">
						<label htmlFor="email">Email</label>
						<Field
							className="login__field--element"
							name="email"
							validate={validateEmail}
						/>
						{errors.email && touched.email && <Box>{errors.email}</Box>}
					</Box>
					<Box className="login__field--container">
						<label htmlFor="password">Contraseña</label>
						<Field
							className="login__field--element"
							type="password"
							name="password"
							validate={validateUsername}
						/>
						{errors.password && touched.password && (
							<Box>{errors.password}</Box>
						)}
					</Box>

					<a href="#" onClick={() => setToggle((old) => !old)}>
						No tienes cuenta? Regístrate
					</a>

					<Box className="login__box--buttons">
						<Button type="submit" value="Login" />
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default Login;

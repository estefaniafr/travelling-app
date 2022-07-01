import { Formik, Form, Field } from "formik";
import Box from "../Box/Box";
import Button from "../Button/Button";

import "./Login.css";

export const Login = ({ setToggle }) => {
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

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={(values) => {
				// same shape as initial values
				console.log(values);
			}}
		>
			{({ errors, touched, validateField, validateForm }) => (
				<Form>
					<h1>Login</h1>
					<Field
						className="login__field--element"
						name="email"
						validate={validateEmail}
					/>
					{errors.email && touched.email && <Box>{errors.email}</Box>}

					<Field
						className="login__field--element"
						type="password"
						name="password"
						validate={validateUsername}
					/>
					{errors.password && touched.password && <Box>{errors.password}</Box>}

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

import { useFormik } from "formik";
import useAxiosGet from "core/api/hooks/useAxiosGet";

import Box from "../Box/Box";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

import "./Register.css";

const initialValues = {
	name: "",
	lastname: "",
	email: "",
	password: "",
	phone: "",
};

const Register = ({ setToggle }) => {
	const { data, loaded } = useAxiosGet("/users");
	const formik = useFormik({
		initialValues,
		validateOnChange: () => console.log("validate"),
		onSubmit: async (values) => {
			if (!loaded) {
				console.log(values);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
			<h1>Registro</h1>
			<TextField
				name="name"
				label="Nombre"
				onChange={formik.handleChange}
				value={formik.values.name}
			/>
			<TextField
				name="lastname"
				label="Apellidos"
				onChange={formik.handleChange}
				value={formik.values.lastname}
			/>
			<TextField
				name="email"
				label="Email"
				type="email"
				onChange={formik.handleChange}
				value={formik.values.email}
			/>
			<TextField
				name="password"
				label="Contraseña"
				type="password"
				onChange={formik.handleChange}
				value={formik.values.password}
			/>
			<TextField
				name="phone"
				label="Telefono"
				type="tel"
				onChange={formik.handleChange}
				value={formik.values.phone}
			/>
			<a href="#" onClick={() => setToggle((old) => !old)}>
				Tienes una cuenta? Inicia sesión
			</a>

			<Box className="register__box--buttons">
				<Button kind="secondary" type="reset" value="Borrar datos" />
				<Button type="submit" value="Registrar" />
			</Box>
		</form>
	);
};

export default Register;

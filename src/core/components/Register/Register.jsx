import { useFormik } from "formik";
import Box from "../Box/Box";
import api from "core/api";

import "./Register.css";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

const initialValues = {
	name: "",
	lastname: "",
	email: "",
	password: "",
	phone: "",
};

const Register = () => {
	const formik = useFormik({
		initialValues,
		validateOnChange: () => console.log("validate"),
		onSubmit: async (values) => {
			const isLogged = await api.get({ path: "/register" });
			if (isLogged) {
				console.log(values);
			}
		},
	});

	return (
		<Box className="register__box--container">
			<form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
				<h3>Registro</h3>
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

				<Box className="register__box--buttons">
					<Button kind="secondary" type="reset" value="Borrar datos" />
					<Button type="submit" value="Registrar" />
				</Box>
			</form>
		</Box>
	);
};

export default Register;

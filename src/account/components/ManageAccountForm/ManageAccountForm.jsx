import { Formik, Form, Field } from "formik";

import { ROLES } from "core/constants";

import Box from "core/components/Box/Box";
import Button from "core/components/Button/Button";

import "./ManageAccountForm.css";

const initialValues = {
	name: "",
	lastname: "",
	email: "",
};

const ManageAccountForm = ({ user, onUpdate }) => {
	const handleSubmit = ({ name, lastname, email }) =>
		onUpdate({ name, lastname, email });

	const validateEmptyField = (value) => {
		let error;
		if (!value || !value.length) {
			error = "Requerido";
		}
		return error;
	};

	const validateEmail = (value) => {
		let error;
		if (!value) {
			error = "Requerido";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = "No es un email valido";
		}
		return error;
	};

	return (
		<Formik initialValues={user ?? initialValues} onSubmit={handleSubmit}>
			{({ errors, touched, validateField, validateForm }) => (
				<Form>
					<h2 className="manage-account-form__section--title">Perfil</h2>
					<span className="manage-account-form__role">
						{user.role === ROLES.USER_ROLE ? "Operador" : "Administrador"}
					</span>
					<p>Esta es la informacion del usuario, para poder editar</p>
					<Box className="manage-account-form__form--container">
						<label htmlFor="name">Nombre</label>
						<Field
							className="manage-account-form__field"
							name="name"
							validate={validateEmptyField}
						/>
						{errors.name && touched.name && (
							<div style={{ color: "red" }}>{errors.name}</div>
						)}
					</Box>

					<Box className="manage-account-form__form--container">
						<label htmlFor="lastname">Apellidos</label>
						<Field
							className="manage-account-form__field"
							name="lastname"
							validate={validateEmptyField}
						/>
						{errors.lastname && touched.lastname && (
							<div style={{ color: "red" }}>{errors.lastname}</div>
						)}
					</Box>

					<Box className="manage-account-form__form--container">
						<label htmlFor="email">Email</label>
						<Field
							className="manage-account-form__field"
							name="email"
							validate={validateEmail}
						/>
						{errors.email && touched.email && (
							<div style={{ color: "red" }}>{errors.email}</div>
						)}
					</Box>

					<label>
						<span>Este usuario ha sido registrado: </span>
						<strong>{new Date(user.registerDate).toLocaleDateString()}</strong>
					</label>

					<Box className="manage-account-form__buttons--container">
						<Button kind="standard" type="submit" value="Guardar" />
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default ManageAccountForm;

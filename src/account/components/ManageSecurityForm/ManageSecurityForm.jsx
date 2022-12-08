import { Formik, Form, Field } from "formik";
import Box from "core/components/Box/Box";
import Button from "core/components/Button/Button";

import "./ManageSecurityForm.css";
import { useState } from "react";
import Confirm from "core/components/Confirm/Confirm";

const initialValues = {
	password: "",
	newPassword: "",
	validatePassword: "",
};

const ManageSecuirityForm = ({ onUpdate, onDelete }) => {
	const [isOpenConfirm, setIsOpenConfirm] = useState(false);
	// const handleSubmit = ({ validatePassword, ...values }) => { forma corta de sacar una propiedad de un objeto
	const handleSubmit = (values) => {
		const { password, newPassword } = values;
		onUpdate({ password, newPassword });
	};

	const validateEmptyField = (value) => {
		let error;
		if (!value || !value.length) {
			error = "Requerido";
		}
		return error;
	};

	const validatePassword = (pass, allValues) => {
		let error;

		if (validateEmptyField(pass)) {
			error = validateEmptyField(pass);
		} else if (pass !== allValues.newPassword) {
			error = "Las contraseñas no coinciden";
		}

		return error;
	};

	const handleOnClose = () => {
		setIsOpenConfirm(false);
		onDelete();
	};

	return (
		<>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				{({ errors, touched, validateField, validateForm, values }) => (
					<Form>
						<h2 className="manage-security-form__section--title">
							Cambiar contraseña
						</h2>
						<Box className="manage-security-form__form--container">
							<label htmlFor="password">Contraseña actual</label>
							<Field
								className="manage-security-form__field"
								name="password"
								type="password"
								validate={validateEmptyField}
							/>
							{errors.password && touched.password && (
								<div style={{ color: "red" }}>{errors.password}</div>
							)}
						</Box>

						<Box className="manage-security-form__form--container">
							<label htmlFor="newPassword">Nueva contraseña</label>
							<Field
								className="manage-security-form__field"
								name="newPassword"
								type="password"
								validate={(newPassword) => {
									if (validateEmptyField(newPassword)) {
										return validateEmptyField(newPassword);
									} else if (newPassword.length < 6) {
										return "Debe tener al menos 6 caracteres";
									}
								}}
							/>
							{errors.newPassword && touched.newPassword && (
								<div style={{ color: "red" }}>{errors.newPassword}</div>
							)}
						</Box>

						<Box className="manage-security-form__form--container">
							<label htmlFor="validatePassword">Repetir contraseña</label>
							<Field
								className="manage-security-form__field"
								name="validatePassword"
								type="password"
								validate={(pass) => validatePassword(pass, values)}
							/>
							{errors.validatePassword && touched.validatePassword && (
								<div style={{ color: "red" }}>{errors.validatePassword}</div>
							)}
						</Box>

						<Box className="manage-security-form__buttons--container">
							<Button kind="standard" type="submit" value="Actualizar" />
							<Button
								kind="primary"
								className="manage-security-form__delete-account--button"
								value="Eliminar cuenta"
								onClick={() => setIsOpenConfirm(true)}
							/>
						</Box>
					</Form>
				)}
			</Formik>
			<Confirm
				isOpen={isOpenConfirm}
				title={"Eliminar cuenta"}
				description="Esta seguro de eliminar la cuenta?"
				onClose={() => setIsOpenConfirm(false)}
				onConfirm={handleOnClose}
			/>
		</>
	);
};

export default ManageSecuirityForm;

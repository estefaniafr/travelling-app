import { memo } from "react";
import { Formik, Form, Field } from "formik";

import useAxiosPost from "core/api/hooks/useAxiosPost";
import Box from "core/components/Box/Box";
import Button from "core/components/Button/Button";

import "./AddCategoryForm.css";

const initialValues = {
	title: "",
	description: "",
	image: "",
};

const AddCategoryForm = ({ defaultValue, onSubmit }) => {
	const { mutate } = useAxiosPost("/category/create");

	const handleSubmit = (values) => {
		!defaultValue && mutate(values);
		onSubmit(values);
	};

	const validateEmptyField = (value) => {
		let error;
		if (!value || !value.length) {
			error = "Requerido";
		}
		return error;
	};

	return (
		<>
			<Formik
				initialValues={defaultValue ?? initialValues}
				onSubmit={handleSubmit}
			>
				{({ errors, touched, validateField, validateForm, values }) => (
					<Form>
						<Box className="add-category-form__form--container">
							<label htmlFor="title">Titlo categoría</label>
							<Field
								className="add-category-form__field"
								name="title"
								validate={validateEmptyField}
							/>
							{errors.title && touched.title && (
								<div style={{ color: "red" }}>{errors.title}</div>
							)}
						</Box>

						<Box className="add-category-form__form--container">
							<label htmlFor="description">Descripción categoría</label>
							<Field className="add-category-form__field" name="description" />
							{errors.description && touched.description && (
								<div style={{ color: "red" }}>{errors.description}</div>
							)}
						</Box>

						<Box className="add-category-form__form--container">
							<label htmlFor="image">Imagen</label>
							<Field
								className="add-category-form__field"
								name="image"
								type="file"
							/>
							{errors.image && touched.image && (
								<div style={{ color: "red" }}>{errors.image}</div>
							)}
						</Box>

						<Box className="add-category-form__buttons--container">
							<Button
								kind="standard"
								type="submit"
								value={!defaultValue ? "Añadir" : "Editar"}
							/>
							<Button
								kind="primary"
								type="reset"
								className="add-category-form__delete-account--button"
								value="Limpiar"
							/>
						</Box>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default memo(AddCategoryForm);

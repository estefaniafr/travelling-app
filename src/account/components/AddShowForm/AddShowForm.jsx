import { Formik, Form, Field } from "formik";

import useAxiosGet from "core/api/hooks/useAxiosGet";
import Box from "core/components/Box/Box";
import Button from "core/components/Button/Button";

import "./AddShowForm.css";

const initialValues = {
	title: "",
	subtitle: "",
	category: "",
	description: "",
	image: "",
};

const AddShowForm = ({ onSubmit }) => {
	const handleSubmit = (values) => {
		console.log(values);
		onSubmit();
	};

	const { data: categories = [] } = useAxiosGet("/category/list");

	const validateEmptyField = (value) => {
		let error;
		if (!value || !value.length) {
			error = "Requerido";
		}
		return error;
	};

	return (
		<>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				{({ errors, touched, validateField, validateForm, values }) => (
					<Form>
						<Box className="add-show-form__form--container">
							<label htmlFor="title">Titlo show</label>
							<Field
								className="add-show-form__field"
								name="title"
								validate={validateEmptyField}
							/>
							{errors.title && touched.title && (
								<div style={{ color: "red" }}>{errors.title}</div>
							)}
						</Box>

						<Box className="add-show-form__form--container">
							<label htmlFor="subtitle">Subtitulo show</label>
							<Field
								className="add-show-form__field"
								name="subtitle"
								validate={validateEmptyField}
							/>
							{errors.subtitle && touched.subtitle && (
								<div style={{ color: "red" }}>{errors.subtitle}</div>
							)}
						</Box>

						<Box className="add-show-form__form--container">
							<label htmlFor="category">Categoría</label>
							<Field
								className="add-show-form__field"
								name="category"
								as="select"
								validate={validateEmptyField}
							>
								{categories.map(({ _id, title }, i) => {
									return (
										<option key={i} value={_id}>
											{title}
										</option>
									);
								})}
							</Field>
							{errors.category && touched.category && (
								<div style={{ color: "red" }}>{errors.category}</div>
							)}
						</Box>

						<Box className="add-show-form__form--container">
							<label htmlFor="description">Descripción show</label>
							<Field className="add-show-form__field" name="description" />
							{errors.description && touched.description && (
								<div style={{ color: "red" }}>{errors.description}</div>
							)}
						</Box>

						<Box className="add-show-form__form--container">
							<label htmlFor="image">Imagen</label>
							<Field
								className="add-show-form__field"
								name="image"
								type="file"
							/>
							{errors.image && touched.image && (
								<div style={{ color: "red" }}>{errors.image}</div>
							)}
						</Box>

						<Box className="add-show-form__buttons--container">
							<Button kind="standard" type="submit" value="Añadir" />
							<Button
								kind="primary"
								type="reset"
								className="add-show-form__delete-account--button"
								value="Limpiar"
							/>
						</Box>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default AddShowForm;

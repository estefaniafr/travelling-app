import { Formik, Form, Field } from "formik";

import useAxiosGet from "core/api/hooks/useAxiosGet";
import useAxiosPost from "core/api/hooks/useAxiosPost";
import Box from "core/components/Box/Box";
import Button from "core/components/Button/Button";

import "./AddShowForm.css";

const initialValues = {
	title: "",
	subtitle: "",
	category: "",
	description: "",
	duration: "",
	urlLink: "",
	image: "",
};

const AddShowForm = ({ defaultValue, onSubmit }) => {
	const { data: categories = [] } = useAxiosGet("/category/list");
	const { mutate } = useAxiosPost("/show/create");

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
							<label htmlFor="description">Descripción show</label>
							<Field className="add-show-form__field" name="description" />
							{errors.description && touched.description && (
								<div style={{ color: "red" }}>{errors.description}</div>
							)}
						</Box>

						<Box className="add-show-form__twin--fields">
							<Box className="add-show-form__form--container --extends">
								<label htmlFor="category">Categoría</label>
								<Field
									className="add-show-form__field"
									name="category"
									as="select"
									validate={validateEmptyField}
								>
									<option value="" selected disabled hidden>
										Elegir categoría
									</option>
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
								<label htmlFor="duration">Duración</label>
								<Field className="add-show-form__field" name="duration" />
							</Box>
						</Box>

						<Box className="add-show-form__form--container">
							<label htmlFor="urlLink">Enlace</label>
							<Field className="add-show-form__field" name="urlLink" />
							{errors.urlLink && touched.urlLink && (
								<div style={{ color: "red" }}>{errors.urlLink}</div>
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
							<Button
								kind="standard"
								type="submit"
								value={defaultValue ? "Editar" : "Añadir"}
							/>
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

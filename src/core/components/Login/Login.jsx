import { useFormik } from "formik";
import Box from "../Box/Box";
import api from "core/api";

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
		<Box>
			<h3>Login</h3>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
            
				<button type="submit">Submit</button>
			</form>
		</Box>

	);
};

export default Login;
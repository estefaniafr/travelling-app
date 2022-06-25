import PropTypes from "prop-types";

import Box from "../Box/Box";
import "./TextField.css";

const TextField = ({
	className = "text-field__box--container",
	name,
	type = "text",
	onChange,
	label,
	value,
}) => {
	return (
		<Box className={className}>
			<label htmlFor={name}>{label}</label>
			<input
				className="text-field__input--element"
				id={name}
				name={name}
				type={type}
				onChange={onChange}
				value={value}
			/>
		</Box>
	);
};

TextField.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export default TextField;

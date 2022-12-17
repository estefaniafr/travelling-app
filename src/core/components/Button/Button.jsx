import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
	icon,
	className = "",
	type = "button",
	kind = "primary",
	value,
	onClick = () => ({}),
}) => {
	const getKindStyle = () => {
		switch (kind) {
			case "primary":
				return `${className} button__button--wrapper btn-5`;
			case "secondary":
				return `${className} button__button--wrapper btn-1`;
			case "standard":
				return `${className} button__button--wrapper btn-13`;
			default:
				return `${className} button__button--wrapper`;
		}
	};
	return (
		<button className={getKindStyle()} type={type} onClick={onClick}>
			<div className="button__button--value">
				{icon && <div className="button__icon--value">{icon}</div>}
				{value}
			</div>
		</button>
	);
};

Button.defaultProps = {
	onClick: () => ({}),
};

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	kind: PropTypes.string,
	value: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;

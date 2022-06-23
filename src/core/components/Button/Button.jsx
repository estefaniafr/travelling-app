import PropTypes from "prop-types";
import "./Button.css";


const Button = ({ className = "button__button--wrapper", type = "button", kind = "primary", value = "button" }) => {
	const getKindStyle = () => {
		switch (kind) {
			case "primary":                
				return `${className} btn-5`;        
			case "secondary":                
				return `${className} btn-1`;        
			default:
				return `${className} btn-13`;
		}    
        
	};
	return (
		<button className={getKindStyle()} type={type}>
			{value}
		</button>
	);
};

Button.defaultProps = {
	onClick: () => ({})
};

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	kind: PropTypes.string,
	value: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
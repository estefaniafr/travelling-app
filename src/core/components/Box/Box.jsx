import PropTypes from "prop-types";
import "./Box.css";

const Box = ({ children, className = "box__div--container", ...props }) => {
	return (
		<>
			<div {...props} className={className}>
				{children}
			</div>
		</>
	);
};

Box.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Box;

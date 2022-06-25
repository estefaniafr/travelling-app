import PropTypes from "prop-types";
import "./box.css";

const Box = ({ children, className = "box__div--container" }) => {
	return (
		<>
			<div className={className}>{children}</div>
		</>
	);
};

Box.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Box;

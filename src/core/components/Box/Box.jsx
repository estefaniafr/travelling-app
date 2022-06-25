import PropTypes from "prop-types";
import "./box.css";

const Box = ({ children }) => {
const Box = ({ children, className = "box-container" }) => {
	return (
		<>
			<div className="box-container">{children}</div>
			<div className={className}>{children}</div>
		</>
	);
};

Box.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string.isRequired,
};

export default Box;

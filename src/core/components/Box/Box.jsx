import PropTypes from "prop-types";
import "./box.css";

const Box = ({ children }) => {
	return (
		<>
			<div className="box-container">{children}</div>
		</>
	);
};

Box.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Box;

import { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Box.css";

const Box = forwardRef(({ children, ...props }, ref) => {
	return (
		<>
			<div ref={ref} {...props}>
				{children}
			</div>
		</>
	);
});

Box.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Box.displayName = "Box";

export default Box;

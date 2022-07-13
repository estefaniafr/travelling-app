import PropTypes from "prop-types";
import { useMemo } from "react";
import "./Grid.css";

const Grid = ({ container, children, widthColumn }) => {
	const column = useMemo(
		() => ({
			gridTemplateColumns: `repeat(auto-fit, minmax(${widthColumn}px, 1fr))`,
		}),
		[widthColumn]
	);

	return (
		<div
			className={container ? "grid__container" : ""}
			style={container ? column : {}}
		>
			{children}
		</div>
	);
};

Grid.defaultProps = {
	widthColumn: "auto",
	container: false,
};

Grid.propTypes = {
	container: PropTypes.bool,
	widthColumn: PropTypes.number,
};

export default Grid;

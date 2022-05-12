import PropTypes from "prop-types";
import "./index.css";

const Grid = ({ container, children, widthColumn }) => {
	const column = { gridTemplateColumns: `repeat(auto-fit, minmax(${widthColumn}px, 1fr))`};
	return (
		<div 
			className={container ? "grid-container" : "grid-item"}
			style={container ? column : {}}>
			{children}
		</div>
	);
};

Grid.defaultProps = {
	widthColumn: 200,
	container: false,
};

Grid.propTypes = {
	container: PropTypes.bool,
	widthColumn: PropTypes.number,
};

export default Grid;
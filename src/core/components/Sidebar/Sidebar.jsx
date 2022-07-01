import { memo, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "core/components/Box/Box";
import "./Sidebar.css";

const Sidebar = ({ isOpen, side, onClose, children }) => {
	const classBuilder = () => {
		return `sidebar__box--container ${isOpen ? "--open" : ""}
        `;
	};

	useEffect(() => {
		if (isOpen) {
			document.getElementById("root").style.transition = "background-color .5s";
			document.getElementById("root").style.backgroundColor = "rgba(0,0,0,0.4)";
		}

		return () => {
			document.getElementById("root").style.backgroundColor = null;
		};
	}, [isOpen]);

	return (
		<Box style={{ [side]: 0 }} className={classBuilder()}>
			<span className="sidebar__span--close" onClick={onClose}>
				&times;
			</span>
			{isOpen ? children : null}
		</Box>
	);
};

Sidebar.defaultProps = {
	isOpen: false,
	side: "right",
	onClose: () => ({}),
};

Sidebar.propTypes = {
	isOpen: PropTypes.bool,
	side: PropTypes.oneOf(["left", "right"]),
	onClose: PropTypes.func,
	children: PropTypes.node.isRequired,
};

export default memo(Sidebar);

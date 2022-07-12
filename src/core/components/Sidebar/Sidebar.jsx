import { memo, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Box from "core/components/Box/Box";
import "./Sidebar.css";
import useOutsideClick from "core/hooks/useOutsideClick";

const Sidebar = ({ isOpen, side, onClose, children }) => {
	const rootElement = document.getElementById("root");
	const sidebarRef = useRef(null);

	const initialValues = {
		transition: rootElement.style.transition,
		backgroundColor: rootElement.style.backgroundColor,
	};

	const classBuilder = () => {
		return `sidebar__box--container ${isOpen ? "--open" : ""}
        `;
	};

	useOutsideClick(sidebarRef, onClose);

	useEffect(() => {
		if (isOpen) {
			rootElement.style.transition = "background-color .5s";
			rootElement.style.backgroundColor = "rgba(0,0,0,0.4)";
		}

		return () => {
			rootElement.style.backgroundColor = initialValues.backgroundColor;
			rootElement.style.transition = initialValues.transition;
		};
	}, [isOpen]);

	return (
		<Box ref={sidebarRef} style={{ [side]: 0 }} className={classBuilder()}>
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

import PropTypes from "prop-types";
import "./layout.css";

const Layout = ({ children }) => (
	<main className="layout-main_container">{children}</main>
);

Layout.propTypes = {
	text: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
};

export default Layout;

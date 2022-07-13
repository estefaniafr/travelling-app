import PropTypes from "prop-types";
import "./layout.css";

const Layout = ({ children }) => (
	<main className="layout__main--container">{children}</main>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;

import PropTypes from "prop-types";
import "./index.css";

const Layout = ({ children }) => <main className="layout-main_container">{children}</main>;

Layout.propTypes = {
	text: PropTypes.node.isRequired
};

export default Layout;
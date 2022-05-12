import PropTypes from "prop-types";
import "./index.css";

const Title = ({ text }) => <h2 className="title-principal">{text}</h2>;

Title.defaultProps = {
	text: "Vacio"
};

Title.propTypes = {
	text: PropTypes.string.isRequired
};

export default Title;
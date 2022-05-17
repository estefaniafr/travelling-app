import { render, setConfig } from "./functions";
import Application from "./Application";
import "../core/sanitize/reset.css";

const appBuilder = () => {
	setConfig();

	render(<Application />);
};

export default appBuilder;

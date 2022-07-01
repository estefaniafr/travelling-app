import { render, setConfig } from "./functions";
import Application from "core/Application";
import "core/sanitize/reset.css";
import "../../src/index.css";

const appBuilder = () => {
	setConfig();

	render(<Application />);
};

export default appBuilder;

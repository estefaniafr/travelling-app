import { render, setConfig } from "./functions";
import Application from "./Application";

import "../../src/core/sanitize/reset.css";

const appBuilder = () => {
	setConfig();

	render(<Application />);
};

export default appBuilder;

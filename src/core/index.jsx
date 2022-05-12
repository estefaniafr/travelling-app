import { render, setConfig } from "./functions";
import Application from "./Application";

const appBuilder = () => {
	setConfig();

	render(<Application />);
};

export default appBuilder;

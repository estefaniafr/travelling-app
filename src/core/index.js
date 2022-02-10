import { render, setConfig } from "core/functions";
import Application from "core/Application";


const appBuilder = () => {
    setConfig();

    render(<Application />);

};

export default appBuilder;
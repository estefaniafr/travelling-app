
import { BrowserRouter as Router } from "react-router-dom";
import RoutesProvider from "core/RoutesProvider";


const Application = () => {
    return (

        <Router>
            <RoutesProvider />
        </Router>

    );
};

export default Application;
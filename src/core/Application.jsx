import NavBar from "./components/navBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
//import RoutesProvider from "./RoutesProvider";



const Application = () => {
	return (
		<>
			<NavBar />
			{/* <Router>
                <RoutesProvider />
            </Router> */}
		</>
	);
};

export default Application;
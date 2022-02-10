import { BrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import RoutesProvider from "./RoutesProvider";

import "core/sanitize/reset.css";

const Application = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<RoutesProvider />
				<Outlet />
			</BrowserRouter>
		</>
	);
};

export default Application;

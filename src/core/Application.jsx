import { BrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import RoutesProvider from "./RoutesProvider";
import Layout from "./components/Layout/Layout";

const Application = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Layout>
					<RoutesProvider />
					<Outlet />
				</Layout>
			</BrowserRouter>
		</>
	);
};

export default Application;

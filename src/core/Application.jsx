import { BrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutesProvider from "./RoutesProvider";
import Layout from "./components/Layout/Layout";

const Application = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Layout>
					<RoutesProvider />
					<Outlet />
				</Layout>
			</BrowserRouter>
		</>
	);
};

export default Application;

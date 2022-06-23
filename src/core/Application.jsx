import { BrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutesProvider from "./RoutesProvider";
import UserProvider from "./context/UserContext";
import Layout from "./components/Layout/Layout";

const Application = () => {
	return (
		<>
			<BrowserRouter>
				<UserProvider >
					<Navbar />
					<Layout>
						<RoutesProvider />
						<Outlet />
					</Layout>

				</UserProvider>
			</BrowserRouter>
		</>
	);
};

export default Application;

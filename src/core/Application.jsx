import { BrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import RoutesProvider from "./RoutesProvider";
import UserProvider from "./context/UserContext";
import Layout from "./components/Layout/Layout";

const Application = () => {
	return (
		<>
			<BrowserRouter>
				<UserProvider>
					<NavBar />
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

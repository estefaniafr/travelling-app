import { BrowserRouter, Outlet } from "react-router-dom";

import Navbar from "core/components/Navbar";
import RoutesProvider from "core/RoutesProvider";
import UserProvider from "core/context/UserContext";
import Layout from "core/components/Layout/Layout";
import Footer from "core/components/Footer/Footer";

const Application = () => {
	return (
		<>
			<BrowserRouter>
				<UserProvider>
					<Navbar />
					<Layout>
						<RoutesProvider />
						<Outlet />
					</Layout>
					<Footer />
				</UserProvider>
			</BrowserRouter>
		</>
	);
};

export default Application;

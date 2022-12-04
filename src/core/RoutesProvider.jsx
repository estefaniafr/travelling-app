import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { UserContext } from "core/context/UserContext";

import About from "about/pages/About";
import Categories from "categories/pages/Categories";
import ShowDetail from "categories/pages/ShowDetail";
import ContactUs from "contact/pages/ContactUs";
import EventServices from "event-services/pages/EventServices";
import HomePage from "core/pages/HomePage";
import AccountPage from "account/page/AccountPage";

const RoutesProvider = () => {
	const { user } = useContext(UserContext);
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<EventServices />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/show/:idShow" element={<ShowDetail />} />
				<Route path="/shows" element={<Categories />} />
				<Route path="/shows/:idCategory" element={<div>Shows list</div>} />
				{user && (
					<>
						<Route path="/account" element={<AccountPage />} />
					</>
				)}
				<Route path="*" element={<HomePage />} />
			</Routes>
		</>
	);
};

export default RoutesProvider;

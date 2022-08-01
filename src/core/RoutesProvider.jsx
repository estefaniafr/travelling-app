import { Routes, Route } from "react-router-dom";
import About from "about/pages/About";
import Categories from "categories/pages/Categories";
import ShowDetail from "categories/pages/ShowDetail";
import ContactUs from "contact/pages/ContactUs";
import EventServices from "event-services/pages/EventServices";
import HomePage from "core/pages/HomePage";

const RoutesProvider = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<EventServices />} />
				<Route path="/show/:idShow" element={<ShowDetail />} />
				<Route path="/shows" element={<Categories />} />
				<Route path="/shows/:idCategory" element={<div>Shows list</div>} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="*" element={<HomePage />} />
			</Routes>
		</>
	);
};

export default RoutesProvider;

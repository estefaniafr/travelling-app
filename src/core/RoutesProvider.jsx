import About from "about/pages/About";
import Categories from "categories/pages/Categories";
import ContactUs from "contact/pages/ContactUs";
import EventServices from "event-services/pages/EventServices";
import { Routes, Route } from "react-router-dom";
import HomePage from "core/pages/HomePage";

const RoutesProvider = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<EventServices />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/contact" element={<ContactUs />} />
			</Routes>
		</>
	);
};

export default RoutesProvider;

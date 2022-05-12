import About from "about/pages/About";
import Artists from "artists/pages/Artists";
import ContactUs from "contact/pages/ContactUs";
import EventServices from "event-services/pages/EventServices";
import { Routes, Route } from "react-router-dom";
import Access from "./pages/Access";
import HomePage from "./pages/HomePage";

const RoutesProvider = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<EventServices />} />
				<Route path="/artist" element={<Artists />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/access" element={<Access />} />
			</Routes>
		</>
	);
};

export default RoutesProvider;

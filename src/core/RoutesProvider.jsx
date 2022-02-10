import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
// import Index from './pages/Index'

const RoutesProvider = () => {
	return (

		<>

			<Routes>
				<Route path="/" element={<div>TEST</div>} />
				{/* <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/record/:user" element={<Record />} />
                <Route path="*" element={<Error />} /> */}
			</Routes>

		</>

	);
};

export default RoutesProvider; 
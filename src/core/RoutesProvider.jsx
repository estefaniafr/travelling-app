import { Routes, Route } from "react-router-dom";
import HomePage from "core/pages/HomePage"

const RoutesProvider = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<div>Page Quienes somos?</div>} />
				<Route path="/services" element={<div>Page Eventos y Servicios</div>} />
				<Route path="/artist" element={<div>Page Artistas</div>} />
				<Route path="/contact" element={<div>Page Contacto</div>} />
				<Route path="/login" element={<div>Formulario Login</div>} />
			</Routes>		
		</>
	)
};

export default RoutesProvider;
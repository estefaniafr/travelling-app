import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "core/context/UserContext";
import Box from "core/components/Box/Box";
import Sidebar from "core/components/Sidebar/Sidebar";
import Login from "core/components/Login/Login";
import Register from "core/components/Register/Register";
import "./index.css";

export default function Navbar() {
	const { user, setUser } = useContext(UserContext);
	const [open, setOpenSidebar] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	return (
		<>
			<Box className="navbar__box--container">
				<NavLink to="/">
					<h1>Travelling</h1>
				</NavLink>
				<Box className="navbar__box--screens">
					<NavLink to="/about">Quienes somos</NavLink>

					<NavLink to="/services">Servicios</NavLink>

					<NavLink to="/shows">Espectaculos</NavLink>

					<NavLink to="/contact">Contacto</NavLink>
				</Box>
				<Box className="navbar__box--access">
					{!user && (
						<span to="/access" onClick={() => setOpenSidebar(true)}>
							Acceso
						</span>
					)}
				</Box>
			</Box>
			<Sidebar
				isOpen={open}
				onClose={() => [setOpenSidebar(false), setShowRegister(false)]}
			>
				<Box className="navbar__box--sidebar">
					{showRegister ? (
						<Register setToggle={setShowRegister} />
					) : (
						<Login setToggle={setShowRegister} />
					)}
				</Box>
			</Sidebar>
		</>
	);
}

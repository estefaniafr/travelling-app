import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "core/context/UserContext";
import Box from "core/components/Box/Box";
import Sidebar from "core/components/Sidebar/Sidebar";
import UserProfile from "core/components/UserProfile";
import Login from "core/components/Login/Login";
import Register from "core/components/Register/Register";

import "./index.css";
import SidebarUserMenu from "account/components/SidebarUserMenu";

export default function Navbar() {
	const { user } = useContext(UserContext);
	const [open, setOpenSidebar] = useState(false);
	const [openUserMenu, setOpenUserMenu] = useState(false);
	const [showRegister, setShowRegister] = useState(false);
	const [userEmail, setUserEmail] = useState();

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
					{!user ? (
						<span to="/access" onClick={() => setOpenSidebar(true)}>
							Acceso
						</span>
					) : (
						<UserProfile user={user} onClick={() => setOpenUserMenu(true)} />
					)}
				</Box>
			</Box>

			<Sidebar
				isOpen={open}
				onClose={() => [setOpenSidebar(false), setShowRegister(false)]}
			>
				<Box className="navbar__box--sidebar">
					{showRegister ? (
						<Register setToggle={setShowRegister} onRegister={setUserEmail} />
					) : (
						<Login
							setToggle={setShowRegister}
							userEmail={userEmail}
							onUserLogged={(user) => setOpenSidebar(!user)}
						/>
					)}
				</Box>
			</Sidebar>

			<SidebarUserMenu
				isOpen={openUserMenu}
				onClose={() => setOpenUserMenu(false)}
			/>
		</>
	);
}

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "core/context/UserContext";

import "./Navbar.css";

export default function Navbar() {
	const { user, setUser } = useContext(UserContext);
	return (
		<header>
			<NavLink to="/">
				<h1>Travelling</h1>
			</NavLink>
			<nav>
				<ul>
					<li>
						<NavLink to="/about"> Quienes somos </NavLink>
					</li>
					<li>
						<NavLink to="/services"> Servicios </NavLink>
					</li>
					<li>
						<NavLink to="/artist"> Artistas </NavLink>
					</li>
					<li>
						<NavLink to="/contact"> Contacto </NavLink>
					</li>
				</ul>
			</nav>
			<div className="navbar__box--access">
				{!user && <NavLink to="/access"> Acceso </NavLink>}
				{!user ? (
					<button onClick={() => setUser("User")}>test</button>
				) : (
					<div className="navbar__menu--dropdown">
						User
						<div className="navbar__menu--dropdown-content">
							{user.role === "ADMIN" ? (
								<a>Añadir contenido</a>
							) : (
								<a>Mis favoritos</a>
							)}
							<NavLink to="/profile">Perfil</NavLink>
							<a onClick={() => setUser(undefined)}>Cerrar sesion</a>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}

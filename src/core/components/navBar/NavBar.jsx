import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";

import "./navBar.css";

export default function NavBar() {
	return (
		<nav className="nav">
			<NavLink to="/">
				<img src={logo} className="brand" alt="logo" />
			</NavLink>

			<ul className="nav_menu">
				<li>
					<NavLink className="nav_item" to="/about">
						QUIENES SOMOS
					</NavLink>
				</li>
				<li>
					<NavLink className="nav_item" to="/services">
						SERVICIOS
					</NavLink>
				</li>
				<li>
					<NavLink className="nav_item" to="/artist">
						ARTISTAS
					</NavLink>
				</li>
				<li>
					<NavLink className="nav_item" to="/contact">
						CONTACTO
					</NavLink>
				</li>
				<li>
					<NavLink to="/login">
						<button className="access_button">ACCESO</button>
					</NavLink>
				</li>
			</ul>
			<div className="nav_toggler">
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
		</nav>
	);
}

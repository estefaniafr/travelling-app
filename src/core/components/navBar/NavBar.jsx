import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
	return (
		<header>
			<h1>Travelling</h1>
			<nav>
				<ul>
					<li>
						<Link to={"/about"}> Quienes somos</Link>
					</li>
					<li>
						<Link to={"/services"}>Services</Link>
					</li>
					<li>
						<Link to={"/artist"}>Artist</Link>
					</li>
					<li>
						<NavLink to="/contact"> Contacto </NavLink>
					</li>
				</ul>
			</nav>
			<div className="navbar-access">
				<NavLink to="/login">Acceso</NavLink>
			</div>
		</header>
	);
}

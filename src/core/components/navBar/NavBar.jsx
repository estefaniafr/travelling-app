import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
	return (
		<header>
			<img src="logoTravelling.png" />
			<nav>
				<ul className="text-nav">
					<li>
						<NavLink className="tag" to={"/about"}>
							QUIENES SOMOS
						</NavLink>
					</li>
					<li>
						<NavLink className="tag" to={"/services"}>
							SERVICIOS
						</NavLink>
					</li>
					<li>
						<NavLink className="tag" to={"/artist"}>
							ARTISTAS
						</NavLink>
					</li>
					<li>
						<NavLink className="tag" to="/contact">
							CONTACTO
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="navbar-access">
				<NavLink className="tag" to="/login">
					{" "}
					ACCESO{" "}
				</NavLink>
			</div>
		</header>
	);
}

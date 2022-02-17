import { NavLink } from "react-router-dom";
import './index.css';

export default function NavBar() {
    return (
        <header>
            <NavLink to="/" ><h1>Travelling</h1></NavLink>
            <nav>
                <ul>
                    <li><NavLink to="/about"> Quienes somos </NavLink></li>
                    <li><NavLink to="/services"> Servicios </NavLink></li>
                    <li><NavLink to="/artist"> Artistas </NavLink></li>
                    <li><NavLink to="/contact"> Contacto </NavLink></li>
                </ul>
            </nav>
            <div className='navbar-access'> <NavLink to="/access"> Acceso </NavLink></div>
        </header>
    );
}


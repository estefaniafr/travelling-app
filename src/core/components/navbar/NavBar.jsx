import { NavLink } from "react-router-dom";

import '../navBar/navBar.css';

export default function NavBar() {
    return (
        <header>
            <h1>Travelling</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" > Inicio </NavLink></li>
                    <li><NavLink to="/About"> Quienes somos </NavLink></li>
                    <li><NavLink to="/Services"> Servicios </NavLink></li>
                    <li> <NavLink to="/Artist"> Artistas </NavLink></li>
                    <li><NavLink to="/Contact"> Contacto </NavLink></li>
                </ul>
            </nav>
            <div className='navbar-access'> <NavLink to="/Access"> Acceso </NavLink></div>
        </header>
    );
}


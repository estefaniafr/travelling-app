
import { useState } from 'react';
import '../components/navBar.css';




export function NavBar() {

    const [active, setActive] = useState('nav_menu');

    const [toggleIcon, setToggleIcon] = useState('nav_toggler');

    const handleLogo = () => {
        // Función que a hacer click en el logo, nos lleve a la página de inicio.
    }

    const navToggle = () => {
        active === 'nav_menu'
            ? setActive('nav_menu nav_active')
            : setActive('nav_menu')

        // TogglerIcon 
        toggleIcon === 'nav_toggler'
            ? setToggleIcon('nav_toggler toggle')
            : setToggleIcon('nav_toggler')
    }

    return (
        <nav className='nav'>

            <ul className={active}>
                <li className='nav_item'><a href='#' className='nav_link'>INICIO</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>CONÓCENOS</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>SERVICIOS</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>ARTISTAS</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>CONTACTO</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>ACCESO</a></li>
            </ul>

            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>

        </nav>
    )
}

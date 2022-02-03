
import '../navbar/navBar.css';

export function NavBar() {
    return (
        <header>
            <h1>Travelling</h1>
            <nav>
                <ul>
                    <li><a href='/'>Inicio</a></li>
                    <li><a href='/about'>Quienes Somos</a></li>
                    <li><a href='/event-service'>Servicios</a></li>
                    <li><a href='/artist'>Artistas</a></li>
                    <li><a href='/contact'>Contacto</a></li>
                </ul>
            </nav>
            <div className='navbar-access'>Acceso</div>
        </header>
    );
}

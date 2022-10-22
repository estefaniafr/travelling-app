import Box from "core/components/Box/Box";

import "./AccountPage.css";

// Ejercicio
// Poner estilos a cada item card de la columna basandonos en el ejemplo de la siguiente pagina
// https://dribbble.com/shots/15186840-Setting-page-example
// implementar hover para cada item al pasar el raton por encima con un efecto de profundida/sombra (box-shadow)

// Ejercicio 2
// Basandonos en la plantilla de ejemplo rellenaremos la columna derecha con la informacion de nuestro usuario
// Infoirmacion del usuario
// _id: 6331dca8af6f1be2d68c36fe
// name
// "Carlos"
// lastname
// "Rodriguez"
// email
// "carlos@travelling.com"
// registerDate
// 2022-09-26T17:08:05.898+00:00
// status
// "INACTIVE"
// role
// "USER_ROLE"
// locale
// "es_ES"

// definir la estructura del formulario en la columna derecha con formik
// Toma como ejemplo nuestro componente Login.jsx para ayudarte con solo la estructura del html

// Ejercicio avanzado
// intentar optimizar el codigo para no repetir tantas veces:
// <Box className="account-page__item--card">Account</Box>

// Centrate solo en este componente y en su archivo css

export default function AccountPage() {
	return (
		<section>
			<h1>Ajustes de usuario</h1>
			<Box className="account-page__section--grid">
				<Box className="account-page__column--menu">
					{/* Columna izquierda */}
					<Box className="account-page__item--card">Account</Box>
					<Box className="account-page__item--card">Account</Box>
					<Box className="account-page__item--card">Account</Box>
					<Box className="account-page__item--card">Account</Box>
					<Box className="account-page__item--card">Account</Box>
					<Box className="account-page__item--card">Account</Box>
				</Box>
				<Box className="account-page__column--content">
					<h1>Account</h1>
					{/* Columna derecha */}
				</Box>
			</Box>
		</section>
	);
}

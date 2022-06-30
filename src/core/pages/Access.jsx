import { useState } from "react";
import Login from "core/components/Login/Login";
import Register from "core/components/Register/Register";

import "./Access.css";

export default function Access() {
	const [toggle, setToggle] = useState(false);

	return (
		<div>
			<div>
				<h1>Contenido página de Acceso</h1>
				{toggle ? <Login /> : <Register />}
			</div>
		</div>
	);
}

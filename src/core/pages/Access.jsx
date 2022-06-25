import "./access.css";
import { useState } from "react";
import Register from "core/components/Register/Register";

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

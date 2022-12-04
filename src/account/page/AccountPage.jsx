import { useCallback, useEffect, useMemo } from "react";
import { useContext, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { ImKey } from "react-icons/im";

import { UserContext } from "core/context/UserContext";
import useAxiosPut from "core/api/hooks/useAxiosPut";
import Box from "core/components/Box/Box";
import ManageAccountForm from "account/components/ManageAccountForm/ManageAccountForm";
import ManageSecurityForm from "account/components/ManageSecurityForm/ManageSecurityForm";

import "./AccountPage.css";
import useAxiosDel from "core/api/hooks/useAxiosDel";

export default function AccountPage() {
	const { user, setUser } = useContext(UserContext);
	const [indexOptionsMenu, setIndexOptionsMenu] = useState(0);
	const { data: userUpdate, mutate } = useAxiosPut("/user/account");
	const { mutate: removeAccount } = useAxiosDel("/user/remove");

	const handleRemoveAccount = () => {
		removeAccount(user._id);
	};

	useEffect(() => {
		!!userUpdate && setUser(userUpdate);
	}, [userUpdate]);

	const optionsMenu = useMemo(() => {
		return [
			{
				title: "Cuenta",
				description: "Informacion de la cuenta de usuario, actualizar cuenta",
				onClick: (i) => setIndexOptionsMenu(i),
				icon: <FaUserCircle size={30} />,
			},
			{
				title: "Seguridad",
				description: "Cambiar contraseña, eliminar cuenta",
				onClick: (i) => setIndexOptionsMenu(i),
				icon: <ImKey size={30} />,
			},
			{
				title: "Configuración",
				description: "Administracion de la aplicacíon",
				onClick: (i) => setIndexOptionsMenu(i),
				icon: <IoSettingsSharp size={30} />,
			},
		];
	}, []);

	const displayOption = useCallback(
		(index) => {
			switch (index) {
				case 0:
					return (
						<Box className="account-page__account--container">
							<h1>Cuenta de usuario</h1>
							<ManageAccountForm
								user={user}
								onUpdate={(formValues) =>
									mutate({ id: user._id, ...formValues })
								}
							/>
						</Box>
					);
				case 1:
					return (
						<Box className="account-page__account--container">
							<h1>Seguridad</h1>
							<ManageSecurityForm
								onUpdate={(passwords) => mutate({ id: user._id, ...passwords })}
								onDelete={() => handleRemoveAccount()}
							/>
						</Box>
					);
				case 2:
					return (
						<Box className="account-page__security--container">
							<h1>Configuracion</h1>
							{/* <ManageShows /> */}
							{/* Section añadir categoria */}
							{/* Section añadir shows */}
						</Box>
					);
			}
		},
		[user]
	);

	return (
		<section>
			<h1>Ajustes de usuario</h1>
			<Box className="account-page__section--grid">
				<Box className="account-page__column--menu">
					{/* Columna izquierda */}
					{optionsMenu.map(({ title, description, onClick, icon }, i) => (
						<Box
							key={`${title}_${i}`}
							className="account-page__item--card"
							onClick={() => onClick(i)}
						>
							<Box className="account-page__icon--column">{icon}</Box>
							<Box className="account-page__description--column">
								<strong>{title}</strong>
								<p>{description}</p>
							</Box>
						</Box>
					))}
				</Box>
				<Box className="account-page__column--content">
					{/* Columna derecha */}
					{displayOption(indexOptionsMenu)}
				</Box>
			</Box>
		</section>
	);
}

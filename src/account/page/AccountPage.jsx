import { useCallback, useEffect, useMemo, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { ImKey } from "react-icons/im";

import { UserContext } from "core/context/UserContext";
import useAxiosPut from "core/api/hooks/useAxiosPut";
import useAxiosDel from "core/api/hooks/useAxiosDel";
import Box from "core/components/Box/Box";
import ManageAccountForm from "account/components/ManageAccountForm/ManageAccountForm";
import ManageSecurityForm from "account/components/ManageSecurityForm/ManageSecurityForm";
import Modal from "core/components/Modal/Modal";
import Button from "core/components/Button/Button";
import AddCategoryForm from "account/components/AddCategoryForm/AddCategoryForm";
import AddShowForm from "account/components/AddShowForm/AddShowForm";

import "./AccountPage.css";

export default function AccountPage() {
	const navigate = useNavigate();
	const { user, setUser, isAdmin } = useContext(UserContext);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [idForm, setIdForm] = useState();
	const [indexOptionsMenu, setIndexOptionsMenu] = useState(0);
	const { data: userUpdate, mutate } = useAxiosPut("/user/account");
	const { mutate: removeAccount, loaded } = useAxiosDel("/user/remove");

	useEffect(() => {
		if (loaded) {
			setUser(undefined);
			navigate("/");
		}
	}, [loaded]);

	const handleRemoveAccount = () => {
		removeAccount(user._id);
	};

	const handleOpenModal = (idForm) => {
		setIdForm(idForm);
		setIsOpenModal(true);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	useEffect(() => {
		!!userUpdate && setUser(userUpdate);
	}, [userUpdate]);

	const optionsMenu = useMemo(() => {
		const options = [
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
		];

		return isAdmin
			? [
					...options,
					{
						title: "Configuración",
						description: "Administracion de la aplicacíon",
						onClick: (i) => setIndexOptionsMenu(i),
						icon: <IoSettingsSharp size={30} />,
					},
			  ]
			: options;
	}, [isAdmin]);

	const displayOption = useCallback(
		(index) => {
			const isCategory = idForm && idForm === "category";
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
							<h2>Añadir Categoría</h2>
							<Button
								className="account-page__action--button"
								value="Añadir Categoría"
								onClick={() => handleOpenModal("category")}
							/>

							<h2>Añadir show</h2>
							<Button
								className="account-page__action--button"
								value="Añadir show"
								onClick={() => handleOpenModal("show")}
							/>

							<Modal
								isOpen={isOpenModal}
								title={isCategory ? "Añadir Categoría" : "Añadir show"}
								onClose={handleCloseModal}
								content={
									isCategory ? (
										<AddCategoryForm onSubmit={handleCloseModal} />
									) : (
										<AddShowForm onSubmit={handleCloseModal} />
									)
								}
							/>
						</Box>
					);
			}
		},
		[user, isOpenModal]
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

import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { ImExit } from "react-icons/im";

import { UserContext } from "core/context/UserContext";
import Sidebar from "core/components/Sidebar/Sidebar";
import Box from "core/components/Box/Box";
import UserProfile from "core/components/UserProfile";

import "./SidebarUserMenu.css";
import { ROLES } from "core/constants";

const SidebarUserMenu = ({ isOpen, onClose }) => {
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);

	const handleNavigate = useCallback((location) => {
		location && navigate(location);
		onClose();
	}, []);

	const handleSingOut = () => {
		handleNavigate("/");
		setUser(undefined);
	};

	return (
		<Sidebar isOpen={isOpen} onClose={onClose}>
			<Box className="sidebar-user-menu__title--container">
				{user && <UserProfile user={user} />}
				<Box className="sidebar-user-menu__title">
					<Box>
						<strong>{`${user?.name} ${user?.lastname}`}</strong>
					</Box>
					<Box>
						{`${user?.role === ROLES.USER_ROLE ? "Usuario" : "Administrador"}`}
					</Box>
				</Box>
			</Box>
			<Box className="sidebar-user-menu__item--list">
				<ul>
					<Box className="sidebar-user-menu__item--container">
						<Box className="sidebar-user-menu__item--icon">
							<IoSettingsSharp size={20} />
						</Box>
						<Box onClick={() => handleNavigate("/account")}>Administración</Box>
					</Box>
					<Box className="sidebar-user-menu__item--container">
						<Box className="sidebar-user-menu__item--icon">
							<AiFillStar size={20} />
						</Box>
						<Box>Favoritos</Box>
					</Box>
					<Box className="sidebar-user-menu__item--container">
						<Box className="sidebar-user-menu__item--icon">
							<ImExit size={20} />
						</Box>
						<Box onClick={handleSingOut}>Cerrar sesion</Box>
					</Box>
				</ul>
			</Box>
		</Sidebar>
	);
};

export default SidebarUserMenu;

import { useMemo } from "react";
import Box from "../Box/Box";
import "./UserProfile.css";

const UserProfile = ({ user, onClick }) => {
	const getInitialLetters = useMemo(
		() => `${user.name[0] || "-"}${user.lastname[0] || "-"}`,
		[user]
	);

	return (
		<Box className="user-profile__box--container" onClick={onClick}>
			{getInitialLetters}
		</Box>
	);
};

export default UserProfile;

import { ROLES } from "core/constants";
import React, { useMemo, useState } from "react";

export const UserContext = React.createContext({});

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(undefined);

	const value = useMemo(() => {
		return {
			user,
			isAdmin: user?.role === ROLES.ADMIN_ROLE,
			setUser: (userLogged) => setUser(userLogged),
		};
	}, [user]);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

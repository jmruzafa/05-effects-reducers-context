import React, { useState } from "react";

const AuthContext = React.createContext({
	//this could be a string or an object like this
	isLoggedIn: false,
	//now we add a property for onLogout with a dummy function
	//so it is 'visible' in VSC and makes development easier
	onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

	const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};

	return (
		<AuthContext.Provider
			value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

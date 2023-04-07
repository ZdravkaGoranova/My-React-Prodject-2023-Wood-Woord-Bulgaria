import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService.js'
import { useLocalStorage } from "../hooks/useLocalStorage.js"

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();

    const [auth, setAuth] = useLocalStorage('auth', {});
    const authService = authServiceFactory();//auth.accessToken

    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const hideErrorBox = () => {
        setErrorMessage("");
        setShowErrorMessage("false");
    };

    useEffect(() => {

        if (errorMessage !== "") {
            setShowErrorMessage(true);
            console.log(errorMessage)
            console.log(showErrorMessage)
        }
    }, [errorMessage]);


    const userLogin = async (data) => {
        setAuth(data);
    };

    const onLoginSubmit = async (data) => {
        //const { username, email, password } = Object.fromEntries(new FormData(e.target))=data
        try {
            const result = await authService.login(data)

            userLogin(result);
            navigate('/catalog');

        } catch (error) {
            setErrorMessage(error.message);
            // setErrorMessage('Invalid username or password. Please try again.');
            // alert(error.message)
            return;
            // navigate('/404');
        }
    };
    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        console.log(registerData)

        if (confirmPassword !== registerData.password) {
            //alert("Passwords dont match")
            setErrorMessage("Passwords dont match");
            return;
        }
        if (!isEmailValid(registerData.email)) {
            setErrorMessage('Invalid email address. Please enter a valid email.');
            return;
        }
        try {
            const result = await authService.register(registerData)
            console.log(result)
            setAuth(result);
            navigate('/catalog');

        } catch (error) {
            setErrorMessage(error.message);
            //setErrorMessage('Invalid username or password. Please try again.');
            //  alert(error.message)
            return

        }
    };

    const onLogout = () => {
        authService.logout();
        localStorage.removeItem('key');
        setAuth({});
    };

    const context = {
        userLogin,
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        errorMessage,
        showErrorMessage,
        setErrorMessage,
        hideErrorBox,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        // username: auth.username,
        isAuthenticated: !!auth.accessToken,
    };
    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
}


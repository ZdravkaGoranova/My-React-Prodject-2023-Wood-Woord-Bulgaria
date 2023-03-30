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
    const authService = authServiceFactory(auth.accessToken);

    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const hideErrorBox = () => {
        setErrorMessage("");
        setShowErrorMessage("false");
    };

    useEffect(() => {
       
        if (errorMessage != "") {
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
            //setErrorMessage(error); 
            setErrorMessage('Invalid username or password. Please try again.');
            console.log(error);
            // alert(error.message)
            return;
            // navigate('/404');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        console.log(registerData)
        if (confirmPassword !== registerData.password) {
            //alert("Passwords dont match")
            setErrorMessage("Passwords dont match");
            return;
        }
        try {
            const result = await authService.register(registerData)
            console.log(result)
            setAuth(result);
            navigate('/catalog');

        } catch (error) {
            setErrorMessage('Invalid username or password. Please try again.');
            //  alert(error.message)
            console.log(error);
            return
            // navigate('/404');
        }
    };

    const onLogout = () => {
        authService.logout();

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
        username: auth.username,
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


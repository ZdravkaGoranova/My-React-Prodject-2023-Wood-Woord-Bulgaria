import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService.js'
import {useLocalStorage} from "../hooks/useLocalStorage.js"

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const authService = authServiceFactory(auth.accessToken);
    const navigate = useNavigate();

    const userLogin = async (data) => {
        setAuth(data);
    };

    const onLoginSubmit = async (data) => {
        //const { username, email, password } = Object.fromEntries(new FormData(e.target))=data
        try {
            const result = await authService.login(data)//({ ...data, username: data.username })
            
                    userLogin(result);//  userLogin({ ...authData, username: data.username })
                    navigate('/catalog');
                
        } catch (error) {
            console.log(error);
            navigate('/404');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        console.log(registerData)
        if (confirmPassword !== registerData.password) {
            throw new Error("Passwords dont match");
        }
        try {
            const result = await authService.register(registerData)
            console.log(result)
            setAuth(result);
            navigate('/catalog');
         
        } catch (error) {
            console.log(error);
            navigate('/404');
        }
    };

    const onLogout =  () => {
        authService.logout();

        setAuth({});
    };

    const context = {
        userLogin,
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
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


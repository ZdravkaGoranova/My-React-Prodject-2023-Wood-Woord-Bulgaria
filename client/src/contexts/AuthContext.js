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
            console.log('Error:' + error)
            navigate('/404');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }
        try {
            const result = await authService.register(registerData)
         
            setAuth(result);
            navigate('/catalog');
         
        } catch (error) {
            console.log('Error:' + error)
            navigate('/404');
        }
    };

    const onLogout = async () => {
       await authService.logout();

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

// export const useAuthContext = () => {
//     const context = useContext(AuthContext);

//     return context;
// };









// export const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useLocalStorage('session', {});
//     const userLogin = (userData) => setAuth(userData);
//     const userLogout = () => setAuth({});

//     return (
//         <AuthContext.Provider
//             value={{ user: auth, userLogin, userLogout }}
//         >
//             {children}
//         </AuthContext.Provider>
//     );
// }
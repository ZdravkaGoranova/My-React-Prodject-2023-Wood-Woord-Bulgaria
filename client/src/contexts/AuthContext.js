 import { createContext } from "react";
// import { useLocalStorage } from "../hooks/useStorage";

 export const AuthContext = createContext();

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
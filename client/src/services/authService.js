import { requestFactory } from './requester.js'
const baseUrl = "http://localhost:3030/users";

export const authServiceFactory = () => {
    const request = requestFactory();
    
    // export const authServiceFactory = (token) => {
    //     const request = requestFactory(token);


    return {
        register: (data) => {
            const result = request.post(`${baseUrl}/register`, data)
            return result;
        },

        login: (data) => {
            const result = request.post(`${baseUrl}/login`, data)
    
            return result;
        },
        logout:  () => {
            request.get(`${baseUrl}/logout`)
        },
    }
}
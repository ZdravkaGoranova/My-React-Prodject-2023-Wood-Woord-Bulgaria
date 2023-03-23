import { requestFactory } from './requester.js'
const baseUrl = "http://localhost:3030/users";

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    
    return {
        register: (data) => {
            const result = request.post(`${baseUrl}/register`, data)
            return result;
        },
        logout: () =>  request.get(`${baseUrl}/logout`) ,

        login: (data) => {
            const result = request.post(`${baseUrl}/login`, data)
            console.log(result);
            return result;
        },
    }
}
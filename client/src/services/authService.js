import * as request from './requester.js'
const baseUrl = "http://localhost:3030/users";

export const register = async (data) => {

    const result = await request.post(`${baseUrl}/register`, data)
    return result;
};

export const logout = (accessToken) => {
    request.get(`${baseUrl}/logout`)

    // return fetch(`${baseUrl}/logout`, {
    //     method: "GET",
    //     headers: {
    //         "X-Authorization": accessToken
    //     }
    // });
};
// export const logout = (accessToken) => {
//     return fetch(`${baseUrl}/logout`, {
//         method: "GET",
//         headers: {
//             "X-Authorization": accessToken
//         }
//     });
// };
export const login = async (loginData) => {
    console.log("loginUser");
    const result = await request.post(`${baseUrl}/login`, loginData)
    // console.log(result);
    return result;
};
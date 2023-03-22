// import { requestFactory } from './requester.js';
// import { useService } from '../hooks/useService.js';
// const baseUrl = 'http://localhost:3030/jsonstore/likes';


// export const create = async (data) => {
//     const request = useService(requestFactory);
//     console.log("jsonstore/likes");

//     const result = await request.post(baseUrl,data)

//     console.log("result");
//     console.log(result);

//     return result;
// };


// export const getAll = async (productId) => {
//     const request = useService(requestFactory);
//     const query =encodeURIComponent(`productId=${productId}`);

//     const result = await request.get(`${baseUrl}?where=${query}`);//search
//     const likes = Object.values(result)
//     return likes;
// };
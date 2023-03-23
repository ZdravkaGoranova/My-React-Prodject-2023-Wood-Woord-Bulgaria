import { requestFactory } from './requester.js';
import { useService } from '../hooks/useService.js';
const baseUrl = 'http://localhost:3030/data/comments';

export const comentServiceFactory = (token) => {
    const request = requestFactory(token)

    const create = async (data) => {
    
        console.log("data/comments");

        const result = await request.post(baseUrl, data)
        const comments = Object.values(result)
        console.log("result");
        console.log(result);
        console.log(comments);
        return comments;
    };

    const getAll = async (productId) => {
        const query = encodeURIComponent(`productId=${productId}`);
      
        const result = await request.get(`${baseUrl}?where=${query}`);//search
        const comments = Object.values(result)
        return comments;
    };
    return {
        create,
        getAll,
    }

}
import { requestFactory } from './requester.js';

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const create = async (productId,comment) => {

    const result = await request.post(baseUrl, {productId,comment})
    console.log(result);

    return result;
};

export const getAll = async (productId,) => {
    const searchQuery = encodeURIComponent(`productId="${productId}"`);
    const relationQuery = encodeURIComponent(`author={_ownerId:users`);
    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);//search
    const comments = Object.values(result)
    return comments;
};

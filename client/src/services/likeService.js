

import { requestFactory } from './requester.js';

const baseUrl = 'http://localhost:3030/data/likes';
const request = requestFactory();

export const create = async (productId,like,userEmail) => {

    const result = await request.post(baseUrl, {productId,like,userEmail})
    console.log(result);

    return result;
};

export const getAll = async (productId,) => {
    const searchQuery = encodeURIComponent(`productId="${productId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);
    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);//search
    const likes = Object.values(result)
    return likes;
};

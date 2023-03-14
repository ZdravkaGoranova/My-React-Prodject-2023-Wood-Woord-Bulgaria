
import * as request from './requester.js'
const baseUrl = 'http://localhost:3030/jsonstore/woodTypes';


export const create = async (productData) => {
    const {  ...data } = productData;
    console.log("----------");
    console.log(productData);
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log("result");
    console.log(result);
  
    return result;
};

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const products =Object.values(result);

    return products;
};

export const getByCategory = async (category) => {
    const result = await getAll();
    let filteredProducts = result.filter(product => product.type === category)

    return filteredProducts
}

export const getMyPublications = (ownerId) => fetch(`${baseUrl}/profile/${ownerId}`).then(res => res.json());

export const getOne = (publicId) => fetch(`${baseUrl}/${publicId}`).then(res => res.json());



export const deletePublication = (publicId, accessToken) => {
    return fetch(`${baseUrl}/delete/${publicId}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': accessToken
        }
    })
        .then(res => res.json());
};

export const editPublication = (publicId, accessToken, data) => {
    return fetch(`${baseUrl}/edit/${publicId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
};

export const saveFilm = (publicId, userId, token) => {
    return fetch(`${baseUrl}/save/${publicId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ userId })
    })
        .then(res => res.json());
};

export const getSavedFilms = (userId, token) => {
    return fetch(`${baseUrl}/save/${userId}`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json());
}
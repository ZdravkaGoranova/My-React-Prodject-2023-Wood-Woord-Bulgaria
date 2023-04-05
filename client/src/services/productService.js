
import { requestFactory } from './requester.js'

const host = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'http://localhost:3030'; //http://localhost:3031 TODO: Add server url when deployed  https://react-wood-working.web.app

const baseUrl = `${host}/data/woodTypes`;

export const productServiceFactory = (token) => {
    const request = requestFactory(token)

    const create = async (productData) => {
        const { ...data } = productData;
        const result = await request.post(baseUrl, data);
        console.log(result);
        return result;
    };
    const delProduct = async (productId) => {
        const result = await request.delete(`${baseUrl}/${productId}`)
        return productId;
    };

    const update = async (productId, data) => {
       
        const result = await request.put(`${baseUrl}/${productId}`, data)
        console.log(result);
        return result;
    };

    const getAll = async () => {
        const result = await request.get(baseUrl);

        const products = Object.values(result);
        // console.log(result);
        return products;
    };

    //  const getAllProducts = async () => {
    //     const searchQuery = encodeURIComponent(`productId="${productId}"`);
    //     const relationQuery = encodeURIComponent(`author=_ownerId:users`);
    //     const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);//search
    //     const comments = Object.values(result)
    //     return comments;
    // };

    const getOne = async (productId) => {
        const result = await request.get(`${baseUrl}/${productId}`);
        //console.log(result);
        return result;
    };

    const getByCategory = async (category) => {
        console.log(category)
        const result = await getAll();

        let filteredProducts = result.filter(product => product.type === category)
        console.log(filteredProducts)
        return filteredProducts
    }

    const getProductsByUserId = async (userId) => {
        const result = await getAll();

        const userProducts = result.filter(product => product._ownerId === userId)
        // console.log( userProducts)
        return userProducts;
    };

    return {
        create,
        delProduct,
        update,
        getAll,
        getOne,
        getByCategory,
        getProductsByUserId,
       
    }
}




















// export const getOne = (publicId) => fetch(`${baseUrl}/${publicId}`).then(res => res.json());
//const getMyPublications = (ownerId) => fetch(`${baseUrl}/profile/${ownerId}`).then(res => res.json());

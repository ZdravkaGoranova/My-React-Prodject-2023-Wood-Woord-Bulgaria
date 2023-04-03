
import { requestFactory } from './requester.js'
const baseUrl = 'http://localhost:3030/data/woodTypes';

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
        // console.log("updateProduct");
        // console.log(productId);

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

    // const getProductsByUserId = async (userId) => {
    //     const result = await getAll();
       
    //     const userProducts = result.filter(product => product._ownerId === userId)

    //     console.log( userProducts)
    //      console.log( Object.values(userProducts))
    //     return userProducts;
    // };
    // const getMyPublications = (ownerId) => fetch(`${baseUrl}/profile/${ownerId}`).then(res => res.json()); const create = async (productData) => {
    //     const { ...data } = productData;

    //     const result = await request.post(baseUrl, data);

    //     console.log(result);
    //     return result;
    // };

    const getMyPublications = (ownerId) => fetch(`${baseUrl}/profile/${ownerId}`).then(res => res.json());

    return {
        create,
        delProduct,
        update,
        getAll,
        getOne,
        getByCategory,
       // getProductsByUserId,
        getMyPublications,
    }
}


// export const getOne = (publicId) => fetch(`${baseUrl}/${publicId}`).then(res => res.json());




export const productReducer = (state, action) => {


    if (action.type === "GET_PRODUCT_START") {
        return { ...state, productsLoalding: true };
    }
    if (action.type === "GET_PRODUCT_ERROR") {
        return { ...state, productsLoalding: false, productsError: true };
    }
    if (action.type === "GET_PRODUCT_SUCCESS") {
        return {
            ...state,
            productsLoalding: false,
            productsError: false,
            products: action.payload,
        };
    }
    if (action.type === "CHANGE_PRODUCT_TYPE")
        return {
            ...state,
            selectedType: action.payload
        };

    if (action.type === "FILTRED_PRODUCT_TYPE") {
        const { products } = state;
        let filtredProducts = [...products]

        if (state.selectedType !== "") {
            filtredProducts = filtredProducts.filter(x => x.type.toLowerCase() === state.selectedType.toLowerCase())
        }

        return {
            ...state,
            filteredProducts: filtredProducts
        }
    }

    if (action.type === "PRODUCT_FETCH") {
        return { ...action.payload };
    }

    if (action.type === "COMMENT_ADD") {

        return {
            ...state,
            comments: [
                ...state.comments,
                {
                    ...action.payload,
                    author: {
                        email: action.userEmail,
                    }
                }
            ],
        }
    }

    if (action.type === "LIKE_ADD") {

        return {
            ...state,
            likes: [...state.likes, action.payload]
        }
    }

    if (action.type === "UPDATE_PRODUCT") {
        const updatedProduct = action.payload;
        console.log(updatedProduct)

        console.log(state)
        const { products } = state;

        const updatedProducts = products.map(product => {
            if (product._id === updatedProduct._id) {
                return updatedProduct;
            }
            return product
        });
        return {
            ...state,
            selectetProduct: updatedProduct,
            products: updatedProducts
        };
    }
    if (action.type === "ADD_PRODUCT") {
        return {
           ...state,
            products: [...state.products, action.payload],
        };


    }
    if (action.type === "DELETE_PRODUCT") {
     
        const { products } = state;

        let filtredProducts;

        const deleteProduct = action.payload;
        console.log(deleteProduct)
        console.log(deleteProduct.id)

        if (deleteProduct !== {}) {
           filtredProducts = products.filter(product => product._id !== deleteProduct.id)
            console.log(filtredProducts)
        }

        return {
            ...state,
            filtredProducts: filtredProducts,
            delProduct: deleteProduct,
            products:filtredProducts,
        }
            ;
    }

}

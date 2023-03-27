

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

    if (action.type === "GAME_FETCH") {
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
            if (product.id === updatedProduct.id) {
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
            products: action.payload
        };
    }
    if (action.type === "DELETE_PRODUCT") {
        const { products } = state;
        let filtredProducts ;
        const deleteProduct = products.filter(product => product.id === action.id)
        console.log(deleteProduct)

        if(deleteProduct!=={}){
            filtredProducts=products.filter(product => product.id !== action.id)
            console.log(filtredProducts)
        }
        
        return {
            ...state,
            filtredProducts: filtredProducts,
            delProduct:deleteProduct,
        }
            ;
    }

 


//      

}




// export const productReducer = (state, action) => {
//     console.log(action)
//     console.log(action.payload)
//     //console.log(Object.values(action.payload))

//     console.log(state)

//     switch (action.type) {

//         case 'SET_PRODUCTS':
//             return action.payload;

//         case 'UPDATE_PRODUCT':
//             const updatedProduct = action.payload;
//             console.log(state)
//             const updatedProducts = state.map(product => {
//                 if (product.id === updatedProduct.id) {
//                     return state;
//                 }
//                 return state
//             });

//         case 'ADD_PRODUCT':
//             return [...state, action.payload];


//         case 'DELETE_PRODUCT':
//             const delProduct = state.filter(product => product.id !== action.id)
//             return [
//                 ...state,
//                 { delProduct: state.filter(product => product.id !== action.id) }]
//                 ;
//




//         // case 'SEARCH_PRODUCTS':
//         //     const filteredProducts = state.filter((product) => {
//         //         return product.type === action.type ;
//         //     });
//         //     return {
//         //         ...state,
//         //         searchType: action.payload,
//         //         filteredProducts: filteredProducts
//         //     };


//         // case 'COMMENT_ADD':
//         //     return {
//         //         ...state,
//         //         comments: [
//         //             ...state.comments,
//         //             {
//         //                 ...action.payload,
//         //                 author: {
//         //                     email: action.userEmail,
//         //                 }
//         //             }
//         //         ],
//         //     }


//     }
// };
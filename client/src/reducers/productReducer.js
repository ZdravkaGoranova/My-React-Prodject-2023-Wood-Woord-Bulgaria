export const productReducer = (state, action) => {
    switch (action.type) {

        case "FILTER_PRODUCTS":
            const filteredProducts = state.products.filter(
                (product) => product.type === action.payload
            );
            return { ...state, filteredProducts: filteredProducts, selectedType: action.payload };
        case "RESET_FILTER":
            return { ...state, filteredProducts: state.products, selectedType: null };

        default:
            return state;

        // case 'SET_TYPE':
        //     return state.filter((product) => product.type === action.payload);
        // case 'RESET_TYPE':
        //     return action.payload;


        // case 'GAME_FETCH':
        //     // return Object.assign({}, action.payload);
        //     return { ...state.payload };

        // case 'SET_PRODUCTS':
        //     return action.payload;

        // case 'ADD_PRODUCT':
        //     return [...state, action.payload];
        // // {
        // //     ...state,
        // //     products: [...state.products, action.payload]
        // //   };
        // case 'UPDATE_PRODUCT':
        //     const updatedProduct = action.payload;
        //     const updatedProducts = state.map(product => {
        //         if (product.id === updatedProduct.id) {
        //             return updatedProduct;
        //         }
        //         return product;
        //     });
        //     return {
        //         ...state, updatedProducts
        //     };

        // case "FILTER_PRODUCTS":
        //     const type = action.payload;
        //     const filteredProducts = state.products.filter(
        //         product => product.type === type
        //     );
        //     return { ...state, filteredProducts, type };


        // case 'SEARCH_PRODUCTS':
        //     const filteredProducts = state.filter((product) => {
        //         return product.type === action.type ;
        //     });
        //     return {
        //         ...state,
        //         searchType: action.payload,
        //         filteredProducts: filteredProducts
        //     };

        // case 'FILTER_BY_TYPE':
        //     return state.filter(product => product.type === action.filterType);

        // case 'DELETE_PRODUCT':
        //     // return {
        //     //     ...state,
        //     //     products: state.filter(product => product.id !== action.payload.id)
        //     // };

        //     return state.filter((product) => {
        //         if (product.id !== action.payload.id) {
        //             return {
        //                 ...state,
        //                 products: !product.id
        //             }
        //         } else {
        //             return state
        //         }
        //     }
        //     );



        // case 'PRODUCT_SELECT':
        //     const filteredProducts = state.products.filter((product) =>
        //         product.name.toLowerCase().includes(action.searchTerm.toLowerCase())
        //     );
        //     return {
        //         ...state,
        //         filteredProducts,
        //     };

        // case 'COMMENT_ADD':
        //     return {
        //         ...state,
        //         comments: [
        //             ...state.comments,
        //             {
        //                 ...action.payload,
        //                 author: {
        //                     email: action.userEmail,
        //                 }
        //             }
        //         ],
        //     }

     
    }
};
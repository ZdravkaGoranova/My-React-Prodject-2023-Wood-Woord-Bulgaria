

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
//         case "FILTER_PRODUCTS":

//             const filteredProducts = state.filter(
//                 (product) => product.type === action.payload

//             );
//             return { ...state, filteredProducts: filteredProducts, selectedType: action.payload };

//         case "RESET_FILTER":
//             return { ...state, filteredProducts: state.products, selectedType: null };

//         default:
//             return state;

//         // case 'SET_TYPE':
//         //     return state.filter((product) => product.type === action.payload);
//         // case 'RESET_TYPE':
//         //     return action.payload;


//         // case 'GAME_FETCH':
//         //     // return Object.assign({}, action.payload);
//         //     return { ...action.payload };





//         // case "FILTER_PRODUCTS":
//         //     const type = action.payload;
//         //     const filteredProducts = state.products.filter(
//         //         product => product.type === type
//         //     );
//         //     return { ...state, filteredProducts, type };


//         // case 'SEARCH_PRODUCTS':
//         //     const filteredProducts = state.filter((product) => {
//         //         return product.type === action.type ;
//         //     });
//         //     return {
//         //         ...state,
//         //         searchType: action.payload,
//         //         filteredProducts: filteredProducts
//         //     };

//         // case 'FILTER_BY_TYPE':
//         //     return state.filter(product => product.type === action.filterType);


//         //     return state.filter((product) => {
//         //         if (product.id !== action.payload.id) {
//         //             return {
//         //                 ...state,
//         //                 products: !product.id
//         //             }
//         //         } else {
//         //             return state
//         //         }
//         //     }
//         //     );



//         // case 'PRODUCT_SELECT':
//         //     const filteredProducts = state.products.filter((product) =>
//         //         product.name.toLowerCase().includes(action.searchTerm.toLowerCase())
//         //     );
//         //     return {
//         //         ...state,
//         //         filteredProducts,
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
export const productReducer = (state, action) => {
    switch (action.type) {
        case 'GAME_FETCH':
            // return Object.assign({}, action.payload);
            return { ...state.payload };

        case 'SET_PRODUCTS':
            return action.payload;

        case 'ADD_PRODUCT':
            return [...state, action.payload];
        // {
        //     ...state,
        //     products: [...state.products, action.payload]
        //   };
        case 'UPDATE_PRODUCT':
            const updatedProduct = action.payload;
            const updatedProducts = state.products.map(product => {
                if (product.id === updatedProduct.id) {
                    return updatedProduct;
                }
                return product;
            });
            return {
                ...state,
                products: updatedProducts
            };

            case 'SEARCH_PRODUCTS':
                const filteredProducts = state.filter((product) => {
                  return product.type === action.payload;
                });
                return {
                  ...state,
                  searchType: action.payload,
                  filteredProducts: filteredProducts
                };

        case 'FILTER_BY_TYPE':
            return action.filter(product => product.type === action.filterType);

        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id)
            };

        // case 'PRODUCT_SELECT':
        //     const filteredProducts = state.products.filter((product) =>
        //         product.name.toLowerCase().includes(action.searchTerm.toLowerCase())
        //     );
        //     return {
        //         ...state,
        //         filteredProducts,
        //     };

        case 'COMMENT_ADD':
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

        default:
            return state;
    }
};
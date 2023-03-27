import { createContext, useContext, useEffect, useReducer } from 'react';
import { productServiceFactory } from '../services/productService.js';
import { productReducer } from '../reducers/productReducer.js';

export const WoodContext = createContext();


const initialState = {
    products: [],
    selectedType: "",
    selectetProduct: {},
    filteredProducts: [],
    productsLoalding: false,
    productsError: false,
}
const productService = productServiceFactory();

export const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState)

    const fetchProducts = async () => {

        dispatch({ type: "GET_PRODUCT_START" })

        try {
            const response = await productService.getAll();
            const products = response;
            dispatch({ type: "GET_PRODUCT_SUCCESS", payload: products })

        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
        }
    }
    const cangeProductType = async (e) => {
        dispatch({ type: "CHANGE_PRODUCT_TYPE", payload: e.target.textContent })

    }
    const updateProduct = async (e) => {
        dispatch({ type: "'UPDATE_PRODUCT'", payload: {} })

    }

    useEffect(() => {
        fetchProducts();

    }, [])

    useEffect(() => {
        dispatch({ type: "FILTRED_PRODUCT_TYPE", })

    }, [state.selectedType, state.products])

    return (
        <WoodContext.Provider value={{ ...state, fetchProducts, cangeProductType }} >
            {children}

        </WoodContext.Provider>

    )
}


export const useProductsContext = () => {

    return useContext(WoodContext)
}
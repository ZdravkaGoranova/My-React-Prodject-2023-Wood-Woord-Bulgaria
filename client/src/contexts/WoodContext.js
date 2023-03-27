import { createContext, useContext, useEffect, useReducer } from 'react';
import { productServiceFactory } from '../services/productService.js';
import { productReducer } from '../reducers/productReducer.js';

// import { useNavigate, } from "react-router-dom";


export const WoodContext = createContext();

const productService = productServiceFactory();
// const navigate = useNavigate();

const initialState = {
    products: [],
    comments: [],
    likes: [],
    selectedType: "",
    selectetProduct: [],
    delProduct: [],
    filteredProducts: [],
    productsLoalding: false,
    productsError: false,
}


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



    const updateProduct = async (productId, product) => {

        try {
            const result = await productService.update(productId, product)
            dispatch({ type: 'UPDATE_PRODUCT', payload: { ...product, id: productId } });

            // navigate(`/details/${productId}`, { replace: true });
        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
        }
    }



    const deleteProduct = async (productId) => {
        try {
            const result = await productService.delProduct(productId)
            dispatch({ type: "DELETE_PRODUCT", payload: { id: productId } })

            // navigate("/catalog", { replace: true });
        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
        }
    }


    const addProduct = async (productData) => {

        try {
            const newProduct = await productService.create(productData);
            console.log(newProduct)

            dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
            // navigate("/catalog", { replace: true });

        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
        }
    }

    useEffect(() => {
        fetchProducts();

    }, [])

    useEffect(() => {
        dispatch({ type: "FILTRED_PRODUCT_TYPE", })

    }, [state.selectedType, state.products, state.selectetProduct, state.delProduct])

    return (
        <WoodContext.Provider value={{ ...state, fetchProducts, cangeProductType, deleteProduct, updateProduct, addProduct }} >
            {children}

        </WoodContext.Provider>

    )
}

export const useProductsContext = () => {

    return useContext(WoodContext)
}
import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { productServiceFactory } from '../services/productService.js';
import { productReducer } from '../reducers/productReducer.js';
import { AuthContext } from './AuthContext.js';

export const WoodContext = createContext();



const initialState = {
    products: [],
    selectedType: "",
    selectetProduct: [],
    selectetProducTitle: "",
    selectetProductTitle: [],
    delProduct: [],
    filteredProducts: [],
    productsLoalding: false,
    productsError: false,
}

export const ProductProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [state, dispatch] = useReducer(productReducer, initialState)

    const productService = productServiceFactory();

    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const hideErrorBox = () => {
        setErrorMessage("");
        setShowErrorMessage("false");
    };

    useEffect(() => {

        if (errorMessage !== "") {
            setShowErrorMessage(true);
            console.log(errorMessage)
            console.log(showErrorMessage)
        }
    }, [errorMessage]);

    useEffect(() => {

        fetchProducts();

    }, []);

    useEffect(() => {
        dispatch({ type: "SEARCH_PRODUCT_TITLE" });

    }, [state.selectetProducTitle])


    useEffect(() => {
        dispatch({ type: "FILTRED_PRODUCT_TYPE" });

    }, [state.selectedType, state.products, state.selectetProduct, state.delProduct])

    const fetchProducts = async () => {
        dispatch({ type: "GET_PRODUCT_START" })
        setIsLoading(true);
        try {
            const response = await productService.getAll();
            const products = response;
            dispatch({ type: "GET_PRODUCT_SUCCESS", payload: products })
            setIsLoading(false);
        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
            setIsLoading(false);
            setErrorMessage(error.message);
        }
    };

    const cangeProductType = async (e) => {
        dispatch({ type: "CHANGE_PRODUCT_TYPE", payload: e.target.textContent })
    };

    const searchProductTitle = async (searchTerm) => {
        dispatch({ type: "CHANGE_PRODUCT_TITLE", payload: searchTerm })
    };

    const allProducts = async () => {
        setIsLoading(true);
        try {
            const response = await productService.getAll();
            const products = response;

            dispatch({ type: "GET_All_PRODUCT", payload: products })
            setIsLoading(false);
        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
            setIsLoading(false);
            setErrorMessage(error.message);
        }
    };
    const addProduct = async (productData) => {
        setIsLoading(true);
        try {
            const newProduct = await productService.create(productData);
            // setProducts(state => [...state, newProduct]);
            console.log(newProduct)

            dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
            setIsLoading(false);
        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
            setIsLoading(false);
            setErrorMessage(error.message);
        }
    };

    const updateProduct = async (productId, product) => {
        setIsLoading(true);
        try {
            const result = await productService.update(productId, product)
            dispatch({ type: 'UPDATE_PRODUCT', payload: { ...product, id: productId } });
            setIsLoading(false);
            //setProducts(state => state.map(x => x._id === product._id ? result : x))
            //  const updatedProducts = await productService.getAll();
            //  setProducts(updatedProducts);

        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
            setIsLoading(false);
            setErrorMessage(error.message);
        }
    }

    const deleteProduct = async (productId) => {
        setIsLoading(true);
        try {
            console.log('tuk si')
            const result = await productService.delProduct(productId)
            dispatch({ type: "DELETE_PRODUCT", payload: { id: productId } })
            setIsLoading(false);
        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
            setIsLoading(false);
            setErrorMessage(error.message);
        }
    }
    return (
        <WoodContext.Provider value={{ ...state, fetchProducts, cangeProductType, updateProduct, addProduct, deleteProduct, searchProductTitle, allProducts, isLoading }} >
            {children}

        </WoodContext.Provider>
    )
}

export const useProductsContext = () => {

    return useContext(WoodContext)
}
import { createContext, useContext, useEffect, useReducer } from 'react';
import { productServiceFactory } from '../services/productService.js';
import { productReducer } from '../reducers/productReducer.js';

export const WoodContext = createContext();

const productService = productServiceFactory();

const initialState = {
    products: [],
    selectedType: "",
    selectetProduct: [],
    delProduct: [],
    filteredProducts: [],
    productsLoalding: false,
    productsError: false,
}

export const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState)

    useEffect(() => {

        fetchProducts();

    }, []);

    useEffect(() => {
        dispatch({ type: "FILTRED_PRODUCT_TYPE" });

    }, [state.selectedType, state.products, state.selectetProduct, state.delProduct])

    const fetchProducts = async () => {
        dispatch({ type: "GET_PRODUCT_START" })

        try {
            const response = await productService.getAll();
            const products = response;
            dispatch({ type: "GET_PRODUCT_SUCCESS", payload: products })

        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
        }
    };

    const cangeProductType = async (e) => {
        dispatch({ type: "CHANGE_PRODUCT_TYPE", payload: e.target.textContent })
    };

    const addProduct = async (productData) => {
        try {
            const newProduct = await productService.create(productData);
            // setProducts(state => [...state, newProduct]);
            console.log(newProduct)

            dispatch({ type: 'ADD_PRODUCT', payload: newProduct });

        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
        }
    };

    const updateProduct = async (productId, product) => {
        try {
            const result = await productService.update(productId, product)
            dispatch({ type: 'UPDATE_PRODUCT', payload: { ...product, id: productId } });

            //setProducts(state => state.map(x => x._id === product._id ? result : x))
            //  const updatedProducts = await productService.getAll();
            //  setProducts(updatedProducts);

        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
        }
    }

    const deleteProduct = async (productId) => {
        try {
            console.log('tuk si')
            const result = await productService.delProduct(productId)
            dispatch({ type: "DELETE_PRODUCT", payload: { id: productId } })
            //redirect("/catalog", )
            // navigate("/catalog");
        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
        }
    }


    return (
        <WoodContext.Provider value={{ ...state, fetchProducts, cangeProductType, updateProduct, addProduct,deleteProduct }} >
            {children}

        </WoodContext.Provider>
    )
}

export const useProductsContext = () => {

    return useContext(WoodContext)
}
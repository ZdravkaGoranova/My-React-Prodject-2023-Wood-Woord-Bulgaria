
import './App.css';
import './css/site.css';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { authServiceFactory } from '../src/services/authService.js'
import { productServiceFactory } from './services/productService.js'
import { useService } from './hooks/useService.js';

import { useNavigate, } from "react-router-dom";

import { AuthContext } from './contexts/AuthContext.js'
import { WoodContext } from './contexts/WoodContext'
import { useForm } from '../src/hooks/useForm.js';

import Navigation from './components/Navigation/Navigation.js'
import Catalog from './components/Catalog/Catalog.js';
import Create from './components/Create/Create.js';
import Details from './components/Details/Details.js';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import PageNotFound from './components/PageNotFound/PageNotFound.js';
import Profile from './components/Profile/Profile.js';
import Register from './components/Register/Register.js';
import Edit from './components/Edit/Edit.js';
import Logout from './components/Logout/Logout.js';
// import Delete from './components/Delete/Delete.js';
import Spoons from './components/Catalog/Spoons.js';
import Chairs from './components/Catalog/Chairs.js';
import Ladles from './components/Catalog/Ladles.js';
import Furnitures from './components/Catalog/Furnitures.js';
import Toolboxes from './components/Catalog/Toolboxes.js';
import Handtools from './components/Catalog/Handtools.js';
import Other from './components/Catalog/Оther.js';


function App() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const [auth, setAuth] = useState({});
    //console.log(auth);

    const productService = productServiceFactory(auth.accessToken);
 
    const authService = authServiceFactory(auth.accessToken);

    useEffect(() => {
        productService.getAll()
            .then(data => {
                // console.log(data) //console.log(Object.values(data.products))
                setProducts(data)
            })
    }, []);

    //let newProduct = '';
    // useEffect(() => {
    //     productService.getAll()
    //         .then(data => {
    //             setProducts(data);
    //         });
    // }, [newProduct]);

    const userLogin = async (data) => {
        setAuth(data);
    };
    const onLoginSubmit = async (data) => {
        //const { username, email, password } = Object.fromEntries(new FormData(e.target))=data
        try {
            console.log(data);
            const result = await authService.login({ ...data, username: data.username })
                .then(authData => {
                    console.log(authData);
                    userLogin({ ...authData, username: data.username });
                    navigate('/catalog');
                })
        } catch (error) {
            console.log('Error:' + error)
            navigate('/404');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }
        try {
            const result = await authService.register(registerData)
            console.log(registerData);
            setAuth(result);
            navigate('/catalog');
            //или
            // .then(authData => {
            //     console.log(authData);
            //     setAuth(authData);
            //     navigate('/catalog');
            // })
        } catch (error) {
            console.log('Error:' + error)
            navigate('/404');
        }
    };
    const onSubmitCreateProduct = async (productData) => {
        console.log('onSubmitCreateProduct');

        const newProduct = await productService.create(productData);
        setProducts(state => [...state, newProduct]);

        navigate("/catalog", { replace: true });

        // if (!productData.picture.startsWith("https://")) {
        //     alert("Please enter a valid URL address");
        // } else {
        //     try {

        //         create({ ...productData })
        //             .then(() => {
        //                 navigate("/catalog", { replace: true });
        //             });
        //     } catch (err) {
        //         alert(err);
        //     }
        // }
    };

    const onWoodDeleteClick = async (productId) => {

        const result = await productService.delProduct(productId)
        console.log(productId)
        // const result=  await fetch(`${baseUrl}/${productId}`, { method: 'DELETE' });

        setProducts(state => state.filter(x => x._id !== productId));

        navigate("/catalog", { replace: true });
    };

    const updateProduct = async (productId, product) => {
        if (!product.picture.startsWith("https://")) {
            alert("Please enter a valid URL address");
        } else {
            try {
                const result = await productService.update(productId, product)

                setProducts(state => state.map(x => x._id === product._id ? result : x))
                // const updatedProducts = await productService.getAll();
                // setProducts(updatedProducts);

                navigate(`/details/${productId}`, { replace: true });
            } catch (err) {
                alert(err);
            }
        }
    };
    const onLogout = async () => {
        // await authService.logout();
        setAuth({});
    };
    const contextValue = {
        onWoodDeleteClick,
        onSubmitCreateProduct,
        updateProduct,

        products,
    };
    const context = {
        userLogin,
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
    };
    return (
        <AuthContext.Provider value={context}>
            <WoodContext.Provider value={contextValue}>
                <>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home products={products} />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path="/logout" element={<Logout />} />

                        <Route path='/create' element={<Create />} />
                        <Route path='/profile' element={<Profile />} />

                        <Route path='/catalog' element={<Catalog products={products} />} />
                        <Route path='/catalog/Spoons' element={<Spoons products={products} />} />
                        <Route path='/catalog/Chairs' element={<Chairs products={products} />} />
                        <Route path='/catalog/Ladles' element={<Ladles products={products} />} />
                        <Route path='/catalog/Furnitures' element={<Furnitures products={products} />} />
                        <Route path='/catalog/Toolboxes' element={<Toolboxes products={products} />} />
                        <Route path='/catalog/Handtools' element={<Handtools products={products} />} />
                        <Route path='/catalog/Оther' element={<Other products={products} />} />

                        <Route path='/edit/:productId' element={<Edit />} />

                        <Route path='/details/:productId' element={<Details />} />
                        <Route path='/404' element={<PageNotFound />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </>
            </WoodContext.Provider>
        </AuthContext.Provider>
    );
}
export default App;

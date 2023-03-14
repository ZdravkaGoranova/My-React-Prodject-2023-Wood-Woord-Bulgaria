
import './App.css';
import './css/site.css';

import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as productService from './services/productService.js'
import { useNavigate } from "react-router-dom";

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
import Delete from './components/Delete/Delete.js';
import Spoons from './components/Catalog/Spoons.js';
import Chairs from './components/Catalog/Chairs.js';
import Ladles from './components/Catalog/Ladles.js';
import Furnitures from './components/Catalog/Furnitures.js';
import Toolboxes from './components/Catalog/Toolboxes.js';
import Handtools from './components/Catalog/Handtools.js';
import Other from './components/Catalog/Оther.js';

const baseUrl = 'http://localhost:3030/jsonstore/woodTypes';

function App() {

    const [products, setProducts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        productService.getAll()
            .then(data => {
                console.log(data) //console.log(Object.values(data.products))
                setProducts(data)

                //или
                // await fetch(`${baseUrl}`)
                //     .then(res => res.json())
                //     .then(data => {
                //         // console.log(data) // console.log(data.products)
                //         // console.log(Object.values(data.products))
                //         setProducts(Object.values(data.products))
            })
    }, []);//първия път като се изпълни тази функция
    
    let newProduct = '';
    useEffect(() => {
        productService.getAll()
            .then(data => {
                setProducts(data);
            });
    }, [newProduct]);

    const onSubmitCreateProduct = async (productData) => {

        console.log('onSubmitCreateProduct');

        newProduct = await productService.create({ ...productData });
        setProducts(state => [...state, newProduct]);

        navigate("/catalog", { replace: true });

        // if (!productData.picture.startsWith("https://")) {
        //     alert("Please enter a valid URL address");
        // } else {
        //     try {

        // console.log('тук си')
        //         create({ ...productData })
        //             .then(() => {
        //                 navigate("/catalog", { replace: true });
        //             });
        //     } catch (err) {
        //         alert(err);
        //     }
        // }
    };

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home products={products} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="/logout" element={<Logout />} />

                <Route path='/create' element={<Create onSubmitCreateProduct={onSubmitCreateProduct} />} />
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
                <Route path="/delete/:productId" element={<Delete />} />
                <Route path='/details/:productId' element={<Details />} />

                <Route path='*' element={<PageNotFound />} />

            </Routes>
        </>
    );
}
export default App;

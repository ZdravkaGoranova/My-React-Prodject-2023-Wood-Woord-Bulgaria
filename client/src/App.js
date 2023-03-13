
import './App.css';
import './css/site.css';

import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

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

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter,

// } from 'react-router-dom';




function App() {

  // useEffect(()=>{
  //   fetch(`http://localhost:3030/jsonstore/woodTypes`)
  //   .then(res => res.json())
  //   .then(data => {

  //       const result = Object.keys(data).map(id => ({ id, ...data[id] }))
  //       console.log(data)
  //       console.log(data)

  //       // setTodos(result)
  //       // setIsLoading(false)
  //   })
  // }, []);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/logout" element={<Logout />} />

        <Route path='/create' element={<Create />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/Spoons' element={<Spoons />} />
        <Route path='/catalog/Chairs' element={<Chairs />} />
        <Route path='/catalog/Ladles' element={<Ladles />} />
        <Route path='/catalog/Furnitures' element={<Furnitures />} />
        <Route path='/catalog/Toolboxes' element={<Toolboxes />} />
        <Route path='/catalog/Handtools' element={<Handtools />} />
        <Route path='/catalog/Оther' element={<Other />} />

        <Route path='/edit/:productId' element={<Edit />} />
        <Route path="/delete/:productId" element={<Delete />} />
        <Route path='/details/:productId' element={<Details />} />

        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  );
}
export default App;

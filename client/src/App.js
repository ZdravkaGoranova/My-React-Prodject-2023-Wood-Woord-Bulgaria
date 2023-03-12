
import './App.css';

import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation.js'
import Catalog from './components/Catalog.js';
import Create from './components/Create.js';
import Details from './components/Details.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import PageNotFound from './components/PageNotFound.js';
import Profile from './components/Profile.js';
import Register from './components/Register.js';
import Edit from './components/Edit.js';
import Logout from './components/Logout.js';
import Delete from './components/Delete.js';
import Spoons from './components/Spoons.js';
import Chairs from './components/Chairs.js';
import Ladles from './components/Ladles.js';
import Furnitures from './components/Furnitures.js';
import Toolboxes from './components/Toolboxes.js';
import Handtools from './components/Handtools.js';
import Other from './components/Оther.js';

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

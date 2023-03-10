
import './App.css';

import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import  Navigation  from './components/Navigation.js'
import Catalog from './components/Catalog.js';
import Create from './components/Create.js';
import Details from './components/Details.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import PageNotFound from './components/PageNotFound.js';
import Profile from './components/Profile.js';
import Register from './components/Register.js';
import Edit from './components/Edit.js';


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
        <Route path='/create' element={<Create />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/details' element={<Details />} />
        <Route path='/edit' element={<Edit />} />

      </Routes>

    </>
  );
}

export default App;
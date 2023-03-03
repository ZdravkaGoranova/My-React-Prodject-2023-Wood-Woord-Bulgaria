
import './App.css';
import Catalog from './components/Catalog.js';
import Create from './components/Create.js';
import Details from './components/Details.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import PageNotFound from './components/PageNotFound.js';
import Profile from './components/Profile.js';
import Register from './components/Register.js';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter,

// } from 'react-router-dom';




function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>


          <Route exact path="/" element={<Home />} />

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />


          <Route path='/create' element={<Create />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/404' element={<PageNotFound />} />
          <Route path='/profile' element={<Profile />} />
 */}



          <Home />
          <Login />
          <Register />
          <Create />
          <Catalog />
          <Details />
          <PageNotFound />
          <Profile />

        {/* </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

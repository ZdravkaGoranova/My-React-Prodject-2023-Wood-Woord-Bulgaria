
import './App.css';
import Catalog from './components/Catalog.js';
import Create from './components/Create.js';
import Details from './components/Details.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import PageNotFound from './components/PageNotFound.js';
import Profile from './components/Profile.js';
import Register from './components/Register.js';


function App() {
  return (
    <>
      <Home />
      <Login />
      <Register />
      <Create />
      <Catalog />
      <Details />
      <PageNotFound />
      <Profile />
    </>
  );
}

export default App;

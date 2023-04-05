
import './App.css';
import './css/site.css';

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../src/contexts/AuthContext.js'

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
import RouteGuard from './components/RouteGuard/RouteGuard.js';
import ProductOwner from './components/RouteGuard/ProductOwner.js';

function App() {

    return (
        <AuthProvider>

            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='/profile/:userId' element={<Profile />} />
                <Route path='/catalog' element={<Catalog />} />

                <Route path='/details/:productId' element={<Details />} />
                <Route path='/404' element={<PageNotFound />} />
                <Route path='*' element={<PageNotFound />} />

                <Route element={<RouteGuard />}>
                    <Route path='/edit/:productId' element={
                       <ProductOwner>
                            <Edit />
                            </ProductOwner>
                    } />
                    <Route path='/create' element={<Create />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>

            </Routes>
        </AuthProvider>
    );
}
export default App;


{/* <Route path='/create' element={<RouteGuard >
                    <Create />
                </RouteGuard>} />

                <Route path='/edit/:productId' element={<RouteGuard >
                    <Edit />
                </RouteGuard>} /> */}
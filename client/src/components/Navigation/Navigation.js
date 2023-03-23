import '../Home/home.css'
import { AuthContext } from '../../contexts/AuthContext.js'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const { isAuthenticated, userEmail, username, userId} = useContext(AuthContext)
   
    return (
        <>
            <nav>
                <img src="/img/2.jpg" alt="logo" />
                <a href="/">Wood World Bulgaria</a>
                <ul className="menu">
                    {isAuthenticated ?
                        <>
                            <NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/profile">Welcome, username {username}{userEmail}!</NavLink>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/catalog">Gallery</NavLink></li>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/create">Create Product</NavLink></li>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to={`/profile/${userId}`}>Profile</NavLink></li>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/logout">Logout</NavLink></li>
                        </>
                        :
                        <>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/catalog">Gallery</NavLink></li>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/login">Login</NavLink></li>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/register">Register</NavLink></li>
                        </>
                    }
                </ul>
            </nav>
        </>
    )
}
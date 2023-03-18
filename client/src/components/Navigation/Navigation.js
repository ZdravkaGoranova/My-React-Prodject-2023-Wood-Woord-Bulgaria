import '../Home/home.css'



import { Link, NavLink } from 'react-router-dom';


export default function Navigation() {
    return (
        <>
            <nav>
                {/* <!-- Do not forget to change the path to the image --> */}
                <img src="/img/2.jpg" alt="logo" />
                <a href="/">Wood World Bulgaria</a>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/profile">Welcome, {"email"}</NavLink>
                <ul className="menu">


                    <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/catalog">Gallery</NavLink></li>

                    {/* <!-- Logged users -->
     {{#if isAuthenticated}} */}

                    <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/create">Create Product</NavLink></li>
                    <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/profile">Profile</NavLink></li>
                    <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/logout">Logout</NavLink></li>
                    {/* <!-- Guest users -->
     {{else}} */}
                    <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/login">Login</NavLink></li>
                    <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/register">Register</NavLink></li>

                </ul>

            </nav>
        </>

    )
}
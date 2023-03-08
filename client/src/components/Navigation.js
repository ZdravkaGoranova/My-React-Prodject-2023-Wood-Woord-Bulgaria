import '../css/home.css'
import '../css/site.css'


import { Link } from 'react-router-dom';


export default function Navigation() {
    return (
        <>
            <nav>
                {/* <!-- Do not forget to change the path to the image --> */}
                <img src="/img/2.jpg" alt="logo" />
                <a href="/">Wood World Bulgaria</a>

                <ul clasName="menu">
                    <li><Link to="/catalog">Gallery</Link></li>
            
                    {/* <!-- Logged users -->
     {{#if isAuthenticated}} */}
                    <li><Link to="/create">Create Publication</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    {/* <!-- Guest users -->
     {{else}} */}
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    {/* {{/if}} */}
                </ul>

            </nav>
        </>

    )
}
import '../Home/home.css'
import { AuthContext } from '../../contexts/AuthContext.js'

import { useContext } from 'react'
import { useProductsContext, WoodContext } from '../../contexts/WoodContext.js'

export default function Navigation() {
    const { isAuthenticated, userEmail, username, userId } = useContext(AuthContext)

    return (
        <nav className="navbar navbar-expand-lg border-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <div className="container-fluid">
                {/* <img src="/img/2.jpg" alt="logo" /> */}
                <ul className="nav nav-tabs">
                <a className="nav-link active" href="/">Wood World Bulgaria</a>
                </ul>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="nav nav-tabs">

                        {isAuthenticated ?
                            <>
                                <li className="nav-item">
                                    <a class="nav-link active" aria-current="page" href={`/profile/${userId}`}>Welcome, {username}{userEmail}!</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/catalog">
                                        <img src="/img/magazine-catalog.jpg" alt="Logo" width="24" height="24" className="d-inline-block align-text-top" />
                                        Catalog
                                    </a>
                                </li>

                                <li className="nav-item">
                                
                                    <a className="nav-link" href="/create">
                                        <img src="/img/create.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                                        Create Product
                                    </a>
                                </li>

                                <li className="nav-item">

                                    <a className="nav-link" href={`/profile/${userId}`}>
                                        <img src="/img/profile.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                                        Profile
                                    </a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link" href="/logout">
                                        <img src="/img/log.png" alt="Logo" width="24" height="24" className="d-inline-block align-text-top" />
                                        Logout
                                    </a>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">

                                    <a className="nav-link" href="/catalog">
                                        <img src="/img/magazine-catalog.jpg" alt="Logo" width="24" height="24" className="d-inline-block align-text-top" />
                                        Catalog
                                    </a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link" href="/register">
                                        <img src="/img/Registratioin.jpg" alt="Logo" width="24" height="24" className="d-inline-block align-text-top" />
                                        Register
                                    </a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link" href="/login">
                                        <img src="/img/log.png" alt="Logo" width="24" height="24" className="d-inline-block align-text-top" />
                                        Login
                                    </a>

                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}





  // <nav>
    //   <img src="/img/2.jpg" alt="logo" />
    //   <a href="/">Wood World Bulgaria</a>
    //   <ul className="menu">
    //     {isAuthenticated ?
    //       <>
    //         <NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to={`/profile/${userId}`}>Welcome, username {username}{userEmail}!</NavLink>
    //         <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/catalog">Gallery</NavLink></li>
    //         <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/create">Create Product</NavLink></li>
    //         <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to={`/profile/${userId}`}>Profile</NavLink></li>
    //         <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/logout">Logout</NavLink></li>
    //       </>
    //       :
    //       <>
    //         <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/catalog">Gallery</NavLink></li>
    //         <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/login">Login</NavLink></li>
    //         <li><NavLink style={({ isActive }) => ({ color: isActive ? 'brown' : 'black' })} to="/register">Register</NavLink></li>
    //       </>
    //     }
    //   </ul>
    // </nav>
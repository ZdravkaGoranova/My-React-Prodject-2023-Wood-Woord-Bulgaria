import '../Home/home.css'
import { AuthContext } from '../../contexts/AuthContext.js'

import { useContext } from 'react'
import { useProductsContext, WoodContext } from '../../contexts/WoodContext.js'

export default function Navigation() {

    const { isAuthenticated, userEmail, username, userId } = useContext(AuthContext)
    const { cangeProductType } = useProductsContext();

    return (
        <nav className="navbar navbar-expand-lg border-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
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
                                    <a className="nav-link active" aria-current="page" href={`/profile/${userId}`}>Welcome, {username}{userEmail}!</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="/catalog">Catalog</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="/create">Create Product</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href={`/profile/${userId}`}> Profile</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="/logout">Logout</a>
                                </li>

                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="/catalog">Catalog</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="/register"> Register</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="/login"> Login</a>
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
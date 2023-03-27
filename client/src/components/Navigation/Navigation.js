import '../Home/home.css'
import { AuthContext } from '../../contexts/AuthContext.js'

import { useContext } from 'react'
import { useProductsContext, WoodContext } from '../../contexts/WoodContext.js'

export default function Navigation() {
    const { isAuthenticated, userEmail, username, userId } = useContext(AuthContext)
    const { products } = useContext(WoodContext)
    const { cangeProductType } = useProductsContext();

    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary border-0">
            <div className="container-fluid">
                {/* <img src="/img/2.jpg" alt="logo" /> */}
                <a className="navbar-brand" href="/">Wood World Bulgaria</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        {isAuthenticated ?
                            <>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href={`/profile/${userId}`}>Welcome, {username}{userEmail}!</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/catalog">Gallery</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/create">Create Product</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href={`/profile/${userId}`}>Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/logout">Logout</a>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/catalog">Catalog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            </>
                        }
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu">
                                <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Chairs</button>
                                <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Spoons</button>
                                <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Ladles</button>
                                <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Furnitures</button>
                                <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Toolboxes</button>
                                <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Handtools</button>
                                <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Оther</button>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
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
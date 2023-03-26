import '../Home/home.css'
import { AuthContext } from '../../contexts/AuthContext.js'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const { isAuthenticated, userEmail, username, userId } = useContext(AuthContext)

  return (

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
                                <a className="nav-link" href="/catalog">Gallery</a>
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
                            <li><a className="dropdown-item" href="#">Spoons</a></li>
                            <li><a className="dropdown-item" href="#">Chairs</a></li>
                            <li><a className="dropdown-item" href="#">Ladles</a></li>
                            <li><a className="dropdown-item" href="#">Furnitures</a></li>
                            <li><a className="dropdown-item" href="#">Toolboxes</a></li>
                            <li><a className="dropdown-item" href="#">Handtools</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Other</a></li>
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






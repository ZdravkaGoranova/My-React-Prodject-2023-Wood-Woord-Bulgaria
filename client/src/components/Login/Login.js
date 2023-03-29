import '../Login/register-login.css';

import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext.js';
import { useForm } from '../../hooks/useForm.js';

export default function Login() {
    const { onLoginSubmit, errorMessage, showErrorMessage, hideErrorBox } = useContext(AuthContext);


    const { formValues, onChangeHandler, onSubmit } = useForm({
        username: "",
        email: "",
        password: "",
    }, onLoginSubmit);


    // const hideErrorBox = () => {

    //     setErrorMessage({});
    // };

    return (
        <>
            {/* <div>
                <div className={`error-box ${showErrorMessage && errorMessage ? 'show' : ''}`}>

                    {errorMessage && (
                        <>
                            <p>{errorMessage}</p>
                            <button className="close-btn" onClick={hideErrorBox}>
                                &#10005;
                            </button>
                        </>
                    )}
                </div>
            </div> */}

            {showErrorMessage && errorMessage && (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Attention!</strong> {errorMessage}
                    <button type="button" onClick={hideErrorBox} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}


            {/* {showErrorMessage && (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Attention!</strong> {errorMessage}
                    <button type="button" onClick={hideErrorBox} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )} */}



            <section id="login-container">
                <div className="login-container-info">
                    <img src="/img/23.jpg" alt="image" />

                    <form onSubmit={onSubmit} >
                        <h2>Login</h2>
                        <p>Welcome, see the new  wood products!</p>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
                                value={formValues.email}
                                onChange={onChangeHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="password"
                                autoComplete="current-password"
                                value={formValues.password}
                                onChange={onChangeHandler} />
                        </div>

                        <button type="submit" className="btn btn-outline-warning btn-custom">Submit</button>
                        <div className="card-no-account">
                            <p>Don't have an account? <Link to="/register">Sign up</Link>.</p>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
};




{/* <form onSubmit={onSubmit} className="container-text">
                    <h2>Login</h2>
                    <p>Welcome, see the new  wood products!</p>

                    {/* <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="ivan_00"
                        name="username"
                        autoComplete="username"
                        value={formValues.username}
                        onChange={onChangeHandler}
                    /> */}

{/*                     
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email" placeholder="ivan@abv.bg"
                        name="email"
                        value={formValues.email}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*****"
                        name="password"
                        autoComplete="current-password"
                        value={formValues.password}
                        onChange={onChangeHandler}
                    />

                    <button className="login-btn" type='submit' >Login</button>
                    <div className="card-no-account">
                        <p>Don't have an account? <Link to="/register">Sign up</Link>.</p>
                    </div>

                </form >  */}
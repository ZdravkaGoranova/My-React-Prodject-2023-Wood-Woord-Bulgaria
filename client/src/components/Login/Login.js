import '../Login/register-login.css';

import {  useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext.js';
import { useForm } from '../../hooks/useForm.js';

export default function Login() {
    const {  onLoginSubmit } = useContext(AuthContext);

    const { formValues, onChangeHandler,onSubmit } = useForm({
        username: "",
        email: "",
        password: "",
    }, onLoginSubmit);

    // const onSubmitHandler = async (e) => {
    //     e.preventDefault();
    //     const { username, email, password } = Object.fromEntries(new FormData(e.target))

    //     await authService.login(username, email, password)
    //         .then(authData => {
    //             console.log(authData);
    //             userLogin(authData);
    //             navigate('/');
    //         })
    //         .catch(() => {
    //             navigate('/404');
    //         })
    // };
    return (
        <section id="login-container">
            <div className="container">
                <img src="/img/23.jpg" alt="image" />

                <form onSubmit={onSubmit} className="container-text">
                    <h2>Login</h2>
                    <p>Welcome, see the new  wood products!</p>

                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="ivan_00"
                        name="username"
                        autoComplete="username"
                        value={formValues.username}
                        onChange={onChangeHandler}
                    />
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

                </form>
            </div>
        </section>
    )
};
////   <form onSubmit={(e) => onSubmitHandler(e)} className="container-text"></form>
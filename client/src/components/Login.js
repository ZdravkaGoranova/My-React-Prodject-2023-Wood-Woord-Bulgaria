import '../css/register-login.css'
import '../css/site.css'

// import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';


export default function Login() {

    //const navigate = useNavigate();
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const [formValues, setFormValues] = useState({
        email: "",
        username: "",
        password: "",

    });
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log();
    };
    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };


    const login = e => {
        e.preventDefault();

        // auth
        //     .signInWithEmailAndPassword(email, password)
        //     .then(auth => {
        //         navigate.push('/');
        //     })
        //     .catch(error => alert(error.message))

    }

    return (
        <section id="login-container">
            <div className="container">

                <img src="/img/23.jpg" alt="image" />

                <form onSubmit={onSubmitHandler} className="container-text">
                    <h2>Login</h2>
                    <p>Welcome, see the new masterpieces!</p>

                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="ivan_00"
                        name="username"
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
                        value={formValues.password}
                        onChange={onChangeHandler}
                    />

                    <button className="login-btn" type='submit' onClick={login} >Login</button>
                    <div className="card-no-account">
                        <p>Don't have an account? <a href="/register">Sign up</a>.</p>
                    </div>

                </form>
            </div>
        </section>
    )
}
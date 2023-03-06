import '../css/register-login.css'
import '../css/site.css'

// import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';


export default function Login() {

    //const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
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
            <div class="container">

                <img src="/img/23.jpg" alt="image" />

                <form method="POST" class="container-text">
                    <h2>Login</h2>
                    <p>Welcome, see the new masterpieces!</p>

                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="ivan_00" name="username" value={username} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="*****" name="password" value={password} />

                    <button class="login-btn" type='submit' onClick={signIn} >Login</button>
                    <div class="card-no-account">
                        <p>Don't have an account? <a href="/register">Sign up</a>.</p>
                    </div>

                </form>
            </div>
        </section>
    )
}
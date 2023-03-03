import '../css/register-login.css'
import '../css/site.css'


import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

export default function Register() {
    const navigate = useNavigate ();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const register = e => {
        e.preventDefault();

        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then((auth) => {
        //         if (auth) {
        //             navigate.push('/');
        //         }
        //     })
        //     .catch(error => alert(error.message))

    }


    return (
        <section id="register-container">
            <div className="register-container-info">

                <img src="/img/24.jpeg" alt="image" />

                <form method="POST" className="container-text">
                    <h2>Register</h2>
                    <p>Register to get ideas and view the latest masterpieces.</p>

                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="ivan_00" name="username" value={username} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="*****" name="password"  value={password}/>

                    <label htmlFor="re-password">Repeat password:</label>
                    <input type="password" id="re-password" placeholder="*****" name="confirmPassword" />

                    {/* <label htmlFor="address">Address:</label>
                    <input type="text" id="address" placeholder="2572 Orphan Road" name="address" /> */}

                    <button className="register-btn" type='submit' onClick={register}>Register</button>
                    <div className="card-no-account">
                        <p>Already have an account?<a href="/login" /> Sign in</p>
                    </div>

                </form>
            </div>
        </section>

    )
}
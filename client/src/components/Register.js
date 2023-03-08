import '../css/register-login.css'
import '../css/site.css'


// import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

export default function Register() {
    //const navigate = useNavigate ();
    // const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const [gender, setGender] = useState('male');

    const [formValues, setFormValues] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",

    });
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log();
    };
    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onGenderChange = (e) => {
        setGender(e.target.value)
    };

    const register = (e) => {
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

                <form onSubmit={onSubmitHandler} className="container-text">
                    <h2>Register</h2>
                    <p>Register to get ideas and view the latest masterpieces.</p>


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

                    <label htmlFor="re-password">Repeat password:</label>
                    <input
                        type="password"
                        id="re-password"
                        placeholder="*****"
                        name="confirmPassword"
                        onChange={onChangeHandler}
                    />


                    <div className="gender-container">
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            id="male"
                            value="male"
                            name="gender"
                            onChange={onGenderChange}
                            checked={gender === "male"} />
                    </div>
                    <div className="gender-container">
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            id="female"
                            value="female"
                            onChange={onGenderChange}
                            checked={gender === "female"} />
                    </div>

                    <button
                        className="register-btn"
                        type='submit'
                        onClick={register}
                    >
                        Register</button>
                    <div className="card-no-account">
                        <p>Already have an account?<a href="/login" > Sign in</a>.</p>
                     
                    </div>

                </form>
            </div>
        </section>

    )
}
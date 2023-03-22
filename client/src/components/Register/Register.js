import '../Register/register-login.css'

 import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { useForm } from '../../hooks/useForm.js';
import { AuthContext } from '../../contexts/AuthContext.js';

export default function Register() {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { formValues, onChangeHandler, onSubmit } = useForm({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender:"",
    }, onRegisterSubmit);

    const [gender, setGender] = useState('male');


    // const onSubmitHandler = (ev, userData) => {
    //     ev.preventDefault();
        // if (userData.password.length < 8
        //     || !/[A-Z]/.test(userData.password)
        //     || !/[0-9]/.test(userData.password)
        // ) {
        //     alert("Please enter a valid password!");
        // } else {
        //     if (userData.password !== userData.rePass) {
        //         alert("Invalid data provided!");
        //     } else {
        //         try {
        //             const emailRegExp = new RegExp('^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+.[a-zA-Z]{2})$');
        //             if (emailRegExp.test(userData.email)) {
        //                 service.registerUser(userData)
        //                     .then(result => {
        //                         if (typeof result !== "string") {
        //                             userLogin(result);
        //                             navigate("/", { replace: true });
        //                         } else {
        //                             alert("User with this name already exists!");
        //                         }
        //                     });
        //             }
        //         } catch (err) {
        //             alert(err);
        //         }
        //     }
        // }
    //};

    const onGenderChange = (e) => {
        setGender(e.target.value)
    };

    return (
        <section id="register-container">
            <div className="register-container-info">

                <img src="/img/24.jpeg" alt="image" />

                <form onSubmit={onSubmit} className="container-text">
                    <h2>Register</h2>
                    <p>Register to get ideas and view the latest wood products and tools.</p>
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

                    <label htmlFor="confirmPassword">Confirm password:</label>
                    {/* <ol>
                            <li 
                                className={data.password.length >= 8 ? styles["correct"] : styles["wrong"]}
                            >
                                At least 8 characters long
                            </li>
                            <li
                                className={/[A-Z]/.test(data.password) ? styles["correct"] : styles["wrong"]}
                            >
                                At least 1 upper case character
                            </li>
                            <li
                                className={/[0-9]/.test(data.password) ? styles["correct"] : styles["wrong"]}
                            >
                                At least 1 numeric character
                            </li>
                        </ol> */}

                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="*****"
                        name="confirmPassword"
                        onChange={onChangeHandler} />

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
                            name="gender"
                            onChange={onGenderChange}
                            checked={gender === "female"} />
                    </div>

                    <button className="register-btn" type='submit'>
                        Register</button>
                    <div className="card-no-account">
                        <p>Already have an account?<Link to="/login" > Sign in</Link>.</p>

                    </div>

                </form>
            </div>
        </section>

    )
}
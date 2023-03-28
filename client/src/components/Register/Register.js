import '../Register/register-login.css'

import { Link, } from "react-router-dom";
import { useContext, useState } from 'react';
import { useForm } from '../../hooks/useForm.js';
import { AuthContext } from '../../contexts/AuthContext.js';

export default function Register() {

    const { onRegisterSubmit, errorMessage,setErrorMessage } = useContext(AuthContext);
    const [showErrorBox, setShowErrorBox] = useState(true);

    const { formValues, onChangeHandler, onSubmit } = useForm({

        email: "",
        password: "",
        confirmPassword: "",
    }, onRegisterSubmit);

    const hideErrorBox = () => {
        setErrorMessage({});
    };
    return (
        <>
          <div>
                <div className={`error-box ${showErrorBox && errorMessage ? 'show' : ''}`}>
             
                    {errorMessage && (
                        <>
                            <p>{errorMessage}</p>
                            <button className="close-btn" onClick={hideErrorBox}>
                                &#10005;
                            </button>
                        </>
                    )}
                </div>
            </div>

            <section id="register-container">
                <div className="register-container-info">

                    <img src="/img/24.jpeg" alt="image" />

                    <form onSubmit={onSubmit} className="container-text">

                        <h2>Register</h2>
                        <p>Register to get ideas and view the latest wood products and tools.</p>
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

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword"
                                value={formValues.confirmPassword}
                                onChange={onChangeHandler} />
                        </div>

                        <button type="submit" className="btn btn-outline-warning btn-custom">Submit</button>
                        <div className="card-no-account">
                            <p>Already have an account?<Link to="/login" > Sign in</Link>.</p>

                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}


{/* <label htmlFor="email">Email:</label>
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

<label htmlFor="confirmPassword">Confirm password:</label> */}
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

{/* <input
    type="password"
    id="confirmPassword"
    placeholder="*****"
    name="confirmPassword"
    onChange={onChangeHandler} />


<button className="register-btn" type='submit'>
    Register</button>
<div className="card-no-account">
    <p>Already have an account?<Link to="/login" > Sign in</Link>.</p>

</div> */}



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
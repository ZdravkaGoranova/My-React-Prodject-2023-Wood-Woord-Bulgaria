import '../Profile/profile.css'
import React, { useContext, useEffect, useState } from "react"
import { WoodContext } from '../../contexts/WoodContext.js'
import MyProducts from './MyProducts.js';
import { AuthContext } from '../../contexts/AuthContext.js'
import Spinner from '../Spinner/Spinner.js'

export default function Profile() {
    window.scrollTo(0, 0);

    const { products, isLoading } = useContext(WoodContext)
    console.log(products)

    const { userId, userEmail } = useContext(AuthContext);
    console.log(userId)

    const userProducts = products.filter(product => product._ownerId === userId)
    console.log(userProducts)


    return (
        <section id="profile-page">
            <h1>My Publication Products</h1>
            <section id="profilePage">
                <div className="userInfo">
                    <div className="avatar">
                        <img src="/img/profile.jpg" />
                    </div>

                    <h2>Email: {userEmail}</h2>
                </div>

                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <Spinner />
                    </div>
                ) : (
                    <div className="board">
                        {userProducts.length == 0 &&
                            <div className="no-events">
                                <p>You have no own products!</p>
                                <p>You can create your own products from here:</p>
                                <a href="/create" className="  btn btn-light btn-custom ml-3">Create product</a>

                            </div>
                        }
                        {userProducts.length > 0 && userProducts.map(product =>
                            <li key={product._id}>
                                <MyProducts {...product} />
                            </li>
                        )}
                    </div>
                )}
            </section>

        </section>
    )
}
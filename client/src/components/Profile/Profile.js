
import '../Profile/profile.css'

import React, { useEffect, useState, useContext } from "react"

import { WoodContext } from '../../contexts/WoodContext.js'
import MyProducts from './MyProducts.js';
import { AuthContext } from '../../contexts/AuthContext.js'
import { productServiceFactory } from '../../services/productService.js';
import { useService } from '../../hooks/useService.js';

export default function Profile() {
    const { userEmail, username } = useContext(AuthContext);
    const productService = useService(productServiceFactory)
    const { products } = useContext(WoodContext)
    console.log(products)

    const { userId } = useContext(AuthContext);
    console.log(userId)

    const userProducts = products.filter(product => product._ownerId === userId)
    console.log(userProducts)

    return (
        <section id="profile-page">
            <h1>Full Profile Information</h1>
            <section id="profilePage">
                <div className="userInfo">
                    <div className="avatar">
                        <img src="/img/profile.jpg" />
                    </div>
                    <h2>Username: {username}</h2>
                    <h2>Email: {userEmail}</h2>
                </div>
                <div className="board">
                    {/* <!--If there are event--> */}
                    {userProducts.length == 0 && <div className="no-events">
                        <p>This user has no products yet!</p>
                    </div>}

                    {userProducts.length > 0 &&
                        userProducts.map(product =>
                            <li key={product._id}>
                                <MyProducts {...product} />
                            </li>)}

                </div>
            </section>
        </section>
    )
}



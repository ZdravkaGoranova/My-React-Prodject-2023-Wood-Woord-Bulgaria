
import '../Profile/profile.css'

import React, { useEffect, useState, useContext } from "react"

import { WoodContext } from '../../contexts/WoodContext.js'
import MyProducts from './MyProducts.js';
import { AuthContext } from '../../contexts/AuthContext.js'

export default function Profile() {
    const {  userEmail, username} = useContext(AuthContext)
    const { products } = useContext(WoodContext)
    console.log(products)

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
                    {products.length == 0 && <div className="no-events">
                        <p>This user has no events yet!</p>
                    </div>}

                    {products.length > 0 &&
                        products.map(product =>
                            <li key={product._id}>
                                <MyProducts {...product} />
                            </li>)}

                </div>
            </section>
        </section>
    )
}



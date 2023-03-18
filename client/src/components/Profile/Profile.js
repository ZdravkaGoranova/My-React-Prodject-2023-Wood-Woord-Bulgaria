

import '../Profile/profile.css'

import Publication from '../Catalog/Publication/Publication.js'
import React, { useEffect, useState, useContext } from "react"
import { Link } from 'react-router-dom';
import { WoodContext } from '../../contexts/WoodContext.js'
import MyProducts from './MyProducts.js';
export default function Profile() {

    const { products } = useContext(WoodContext)
    console.log(products)

    return (
        <section id="profile-page">
            <h1>Full Profile Information</h1>
            <section id="profilePage">
                <div class="userInfo">
                    <div class="avatar">
                        <img src="/img/profile.jpg" />
                    </div>
                    <h2>Email: {"email"}</h2>
                </div>
                <div class="board">
                    {/* <!--If there are event--> */}
                    {products.length == 0 && <div class="no-events">
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



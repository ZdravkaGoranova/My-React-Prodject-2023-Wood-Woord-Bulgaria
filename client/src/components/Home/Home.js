
import '../Home/home.css'

import React, { useContext } from "react";

import MyProducts from '../Profile/MyProducts.js';
import { WoodContext } from '../../contexts/WoodContext.js';

export default function Home() {

    const { products } = useContext(WoodContext)
    console.log(products);

    const lastTwoProducts = products.slice(-2);
    console.log(lastTwoProducts);

    return (
        <>
            <div>
                <div className="error-box">
                    <p></p>
                </div>
            </div>
            <section id="home-page">
                <article className="auto-content">
                    <h1>Wood Woord Bulgaria</h1>
                </article>
            </section>
            <section id="home-page-content">
                <h1>Latest Products publication</h1>

                {lastTwoProducts
                    ? lastTwoProducts.map(product =>
                        <MyProducts key={product._id} {...product} />)
                    :
                    null
                }
            </section>
        </>
    )
}


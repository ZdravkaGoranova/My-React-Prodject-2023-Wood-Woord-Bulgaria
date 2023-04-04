
import '../Home/home.css'

import React, { useContext } from "react";

import MyProducts from '../Profile/MyProducts.js';
import { useProductsContext, WoodContext } from '../../contexts/WoodContext.js';

export default function Home() {

    const { products } = useProductsContext();
    // const { products } = useContext(WoodContext)
    console.log(products);

    const lastTwoProducts = products.slice(-3);
    console.log(lastTwoProducts);

    return (
        <>
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


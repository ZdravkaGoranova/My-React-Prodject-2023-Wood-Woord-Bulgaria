
import '../Home/home.css'

import React, { useState, useEffect } from "react";
import Publication from '../Catalog/Publication/Publication.js'

export default function Home({
    products,
}) {
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
                    <h1>Woor Woord Bulgaria</h1>
                </article>
            </section>
            <section id="home-page-content">
                <h1>Latest Products publication</h1>
                <div className="home-page-content-publications">
                    {lastTwoProducts
                        ? lastTwoProducts.map(product =>
                            <Publication key={product._id} {...product} />)
                        :
                        null
                    }
                </div>
        </section>
        </>
    )
}


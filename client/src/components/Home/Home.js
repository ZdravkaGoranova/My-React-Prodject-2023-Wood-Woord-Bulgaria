
import '../Home/home.css'

import React, { useState, useEffect } from "react";
import Publication from '../Catalog/Publication/Publication.js'
import MyProducts from '../Profile/MyProducts.js'

export default function Home({
    products,
}) {
    console.log(products);

    const lastTwoProducts = products.slice(-2);
    console.log(lastTwoProducts);

    // const lastThreeObjects = sortedObjects.slice(0, 3).reverse();
    // const lastThreeObjects = products.slice(-3)
    // console.log(lastThreeObjects);
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


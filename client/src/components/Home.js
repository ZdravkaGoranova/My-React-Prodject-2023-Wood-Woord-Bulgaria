
import '../css/home.css'
import '../css/site.css'
import React, { useState, useEffect } from "react";
import Publication from './Publication.js'

const baseUrl = 'http://localhost:3030/jsonstore/woodTypes';

export default function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`${baseUrl}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // console.log(data.products)
                console.log(Object.values(data.products))
                setProducts(Object.values(data.products))

            })
    }, []);

    const lastTwoProducts = products.slice(-2)
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
                <h1>Statistics of last two Products publication</h1>
                <article className="home-page-content-publications">
                    <ul >
                        {lastTwoProducts
                            ? Object.values(lastTwoProducts).map(product =>
                                <li key={product._id}>
                                    <Publication {...product} />
                                </li>)
                            :
                            null
                        }
                    </ul>
                </article>
            </section>
        </>
    )
}


import '../css/gallery.css'
import '../css/site.css'

import Publication from './Publication.js'
import React, { useEffect, useState } from "react"

const baseUrl = 'http://localhost:3030/jsonstore';

export default function Catalog({
    //data,
}) {
    console.log(':)')
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/woodTypes`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // console.log(data.products)
                // console.log(Object.values(data.products))
                setProducts(Object.values(data.products))

            })
    }, []);

    console.log(typeof products)
    return (

        < section id="gallery" >
            <h1>Wood Gallery</h1>
            <article className="gallery-container">

                <ul >
                    {products
                        ? Object.values(products).map(product =>
                            <li key={product._id}>
                                <Publication {...product} />
                            </li>)
                        :
                        <article className="no-available-publications">
                            <h1>No publications created yet.</h1>
                            <a href="/create" className="create-pub">Create publication</a>
                        </article>
                    }
                </ul>

                {/* <Publication data={data} /> */}

            </article >
        </section >
    )
}
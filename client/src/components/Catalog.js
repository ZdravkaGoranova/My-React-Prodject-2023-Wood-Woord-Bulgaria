import '../css/gallery.css'
import '../css/site.css'

import Publication from './Publication.js'
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

const baseUrl = 'http://localhost:3030/jsonstore/woodTypes';

export default function Catalog({
    //data,
}) {
    console.log(':)')
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

    console.log(Object.values(products))
    console.log(typeof products)

    // const filteredItems = products.filter(item => item.type === 'toolboxes');
    // console.log(filteredItems);

    // const sortedObjects = products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // // използваме slice(), за да вземем първите 3 елемента от сортирания масив и reverse(), за да ги обърнем в правилния ред
    // const lastThreeObjects = sortedObjects.slice(0, 3).reverse();
    // const lastThreeObjects = products.slice(-3)
    // console.log(lastThreeObjects);

    //console.log(typeof products)
    return (

        < section id="gallery" >
            <h1>Wood Gallery</h1>
            <article className="gallery-container">
                <Link to={`/catalog/Spoons`} className="btn-catalog" type='submit' >Spoons</Link>
                <Link to={`/catalog/Chairs`} className="btn-catalog" type='submit' >Chairs</Link>
                <Link to={`/catalog/Ladles`} className="btn-catalog" type='submit' >Ladles</Link>
                <Link to={`/catalog/Furnitures`} className="btn-catalog" type='submit' >Furnitures </Link>
                <Link to={`/catalog/Toolboxes`} className="btn-catalog" type='submit' >Toolboxes</Link>
                <Link to={`/catalog/Handtools`} className="btn-catalog" type='submit' >Handtools </Link>
                <Link to={`/catalog/Оther`} className="btn-catalog" type='submit' >Оther</Link>


                <ul >
                 
                    {products.length  > 0
                        ? products.map(product =>
                            <li key={product._id}>
                                <Publication {...product} />
                            </li>)
                        : 
                             <article className="no-available-publications">
                                <h1>No product created yet.</h1>
                                <a href="/create" className="create-pub">Create product</a>
                            </article>
                         
                    }
                </ul>



            </article >
        </section >
    )
}
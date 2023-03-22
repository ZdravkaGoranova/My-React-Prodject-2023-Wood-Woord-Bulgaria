import '../Catalog/gallery.css'

import Publication from './Publication/Publication.js'
import React, { useEffect, useState, useContext } from "react"
import { Link } from 'react-router-dom';
import { WoodContext } from '../../contexts/WoodContext.js'
export default function Catalog() {
    const { products } = useContext(WoodContext)
    console.log(products)
    //console.log(typeof products)

    // const filteredItems = products.filter(item => item.type === 'toolboxes');
    // console.log(filteredItems);
    return (

        < section id="gallery" >
            <h1>Wood World Gallery</h1>
            <article className="gallery-container">
                <Link to={`/catalog/Spoons`} className="btn-catalog" type='submit' products={products} >Spoons</Link>
                <Link to={`/catalog/Chairs`} className="btn-catalog" type='submit' >Chairs</Link>
                <Link to={`/catalog/Ladles`} className="btn-catalog" type='submit' >Ladles</Link>
                <Link to={`/catalog/Furnitures`} className="btn-catalog" type='submit' >Furnitures </Link>
                <Link to={`/catalog/Toolboxes`} className="btn-catalog" type='submit' >Toolboxes</Link>
                <Link to={`/catalog/Handtools`} className="btn-catalog" type='submit' >Handtools </Link>
                <Link to={`/catalog/Оther`} className="btn-catalog" type='submit' >Оther</Link>

                <ul >
                    {products.length > 0
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
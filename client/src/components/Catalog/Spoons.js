
import '../Catalog/catalog.css';

import Publication from './Publication/Publication.js';
import { Link } from 'react-router-dom';
import { getByCategory } from '../../services/productService.js';
import React, { useEffect, useState, useContext } from "react"

import { WoodContext } from '../../contexts/WoodContext.js'

export default async function Spoons() {
    const { products } = useContext(WoodContext)

    console.log(products)
    // const filteredItems = await getByCategory('spoons')

    // const filterdProduct = { ...products };

    // filterdProduct.map(x=>x.type==='spoons')
    // console.log(filterdProduct)

    return (
<h1>fbdbd</h1>
        // < section id="gallery" >
        //     <h1>Wood Gallery</h1>

        //     <article className="gallery-container">

        //         <Link to={`/catalog/Spoons`} className="btn-catalog" type='submit' >Spoons</Link>
        //         <Link to={`/catalog/Chairs`} className="btn-catalog" type='submit' >Chairs</Link>
        //         <Link to={`/catalog/Ladles`} className="btn-catalog" type='submit' >Ladles</Link>
        //         <Link to={`/catalog/Furnitures`} className="btn-catalog" type='submit' >Furnitures </Link>
        //         <Link to={`/catalog/Toolboxes`} className="btn-catalog" type='submit' >Toolboxes</Link>
        //         <Link to={`/catalog/Handtools`} className="btn-catalog" type='submit' >Handtools </Link>
        //         <Link to={`/catalog/Оther`} className="btn-catalog" type='submit' >Оther</Link>


        //         <ul >
        //             {/* {filteredItems.length > 0
        //                 ? Object.values(filteredItems).map(product =>
        //                     <li key={product._id}>
        //                         <Publication {...product} />
        //                     </li>)
        //                 :
        //                 <article className="no-available-publications">
        //                     <h1>No product created yet.</h1>
        //                     <a href="/create" className="create-pub">Create product</a>
        //                 </article> */}

        //             }
        //         </ul>
        //     </article >
        // </section >
    )
}

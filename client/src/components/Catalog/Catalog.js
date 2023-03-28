import '../Catalog/catalog.css'


import React, { useContext,   } from "react"

import Publication from './Publication/Publication.js'
import { useProductsContext, WoodContext } from '../../contexts/WoodContext.js'



export default function Catalog() {
    const { filteredProducts: products } = useContext(WoodContext)
    // console.log(products)


    const { cangeProductType } = useProductsContext();

    return (

        < section id="gallery" >
            <h1>Wood World Gallery</h1>
            <div className="d-flex justify-content-center mb-4">
            <button type="button" className="btn btn-outline-warning btn-custom ml-3" onClick={cangeProductType}>Chairs</button>
            <button type="button" className="btn btn-outline-warning btn-custom ml-3" onClick={cangeProductType}>Spoons</button>
            <button type="button" className="btn btn-outline-warning btn-custom ml-3" onClick={cangeProductType}>Ladles</button>
            <button type="button" className="btn btn-outline-warning btn-custom ml-3" onClick={cangeProductType}>Furnitures</button>
            <button type="button" className="btn btn-outline-warning btn-custom ml-3" onClick={cangeProductType}>Toolboxes</button>
            <button type="button" className="btn btn-outline-warning btn-custom ml-3" onClick={cangeProductType}>Handtools</button>
            <button type="button" className="btn btn-outline-warning btn-custom ml-3" onClick={cangeProductType}>Оther</button>
            </div>
            <article className="gallery-container">

                <ul >
                    {products.length > 0
                        ? products.map(product =>
                            <li key={product._id}>

                                <Publication {...product} />

                            </li>)
                        :
                        <div className="no-events-buttons">
                            <p>This user has no products yet!</p>
                            <a href="/create" className="  btn btn-outline-warning btn-custom ">Create product</a>
                        </div>
                    }
                </ul>
            </article >
        </section >
    )
}
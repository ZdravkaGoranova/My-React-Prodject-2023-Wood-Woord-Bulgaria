import '../Catalog/catalog.css'


import React, { useContext, } from "react"

import Publication from './Publication/Publication.js'
import { useProductsContext, WoodContext } from '../../contexts/WoodContext.js'
import { AuthContext } from '../../contexts/AuthContext.js'



export default function Catalog() {
    const { filteredProducts: products } = useContext(WoodContext)
    // console.log(products)

    const { isAuthenticated } = useContext(AuthContext);
    const { cangeProductType } = useProductsContext();

    return (

        < section id="gallery" >
            <h1>Wood World Gallery</h1>
            <div className="d-flex justify-content-center mb-4">
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Chairs</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Spoons</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Ladles</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Furnitures</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Toolboxes</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Handtools</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Other</button>
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

                            {isAuthenticated ?
                                <>
                                    <p>No product created in this category!</p>
                                    <p>If you want you can add here:</p>
                                    <a href="/create" className="  btn btn-light btn-custom ml-3 ">Create product</a>
                                </>
                                :
                                <p>No product created in this category! </p>
                            }
                        </div>
                    }
                </ul>
            </article >
        </section >
    )
}
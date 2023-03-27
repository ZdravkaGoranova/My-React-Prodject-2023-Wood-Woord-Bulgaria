import '../Catalog/catalog.css'


import React, { useContext, useReducer  } from "react"

import Publication from './Publication/Publication.js'
import { useProductsContext, WoodContext } from '../../contexts/WoodContext.js'
import { productReducer } from '../../reducers/productReducer.js';


export default function Catalog() {
    const { filteredProducts: products } = useContext(WoodContext)
    // console.log(products)

    const [state, dispatch] = useReducer(productReducer, {});

    function searchProducts(initialState) {
        dispatch({ type: "FILTER_PRODUCTS", payload: initialState });
    }

    const { cangeProductType } = useProductsContext();

    return (

        < section id="gallery" >
            <h1>Wood World Gallery</h1>
            <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Chairs</button>
            <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Ladles</button>
            <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Furnitures</button>
            <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Toolboxes</button>
            <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Handtools</button>
            <button type="button" className="btn btn-outline-warning btn-custom" onClick={cangeProductType}>Оther</button>
            <article className="gallery-container">

                <ul >
                    {products.length > 0
                        ? products.map(product =>
                            <li key={product._id}>

                                <Publication {...product} />

                            </li>)
                        :
                        <div className="no-events">
                            <p>This user has no products yet!</p>
                            <a href="/create" className="  btn btn-outline-warning btn-custom ">Create product</a>
                        </div>
                    }
                </ul>
            </article >
        </section >
    )
}
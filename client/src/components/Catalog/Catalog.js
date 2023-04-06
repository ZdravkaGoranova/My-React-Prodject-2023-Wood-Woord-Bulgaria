import '../Catalog/catalog.css'

import React, { useContext, useState, } from "react"

import Publication from './Publication/Publication.js';
import Spinner from '../Spinner/Spinner.js';

import { useProductsContext, WoodContext } from '../../contexts/WoodContext.js';
import { AuthContext } from '../../contexts/AuthContext.js';

export default function Catalog() {

    const { filteredProducts: products, isLoading } = useContext(WoodContext)
    // console.log(products)

    const { isAuthenticated } = useContext(AuthContext);
    const { cangeProductType, searchProductTitle, allProducts, fetchProducts } = useProductsContext();

    const [searchTerm, setSearchTerm] = useState("");

    return (

        < section id="gallery" >
            <h1>Wood World Gallery</h1>

            <div className="d-flex justify-content-center mb-4">
                <form className="d-flex" role="search" onSubmit={(e) => {
                    e.preventDefault();
                    searchProductTitle(searchTerm);
                }}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className="btn btn-light btn-custom ml-3" type="submit" >Search</button>
                </form>
            </div>

            <div className="d-flex justify-content-center mb-4">
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={allProducts}>All Products</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Chairs</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Spoons</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Ladles</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Furnitures</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Toolboxes</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Handtools</button>
                <button type="button" className="btn btn-light btn-custom ml-3" onClick={cangeProductType}>Other</button>
            </div>
            <article className="gallery-container">
                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <Spinner />
                    </div>
                ) : (
                    <ul>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <li key={product._id}>
                                    <Publication {...product} />
                                </li>
                            ))
                        ) : (
                            <div className="no-events-buttons">
                                <p>No product created in this category!</p>
                                {isAuthenticated && (
                                    <>
                                        <p>If you want you can add here:</p>
                                        <a href="/create" className="  btn btn-light btn-custom ml-3 ">
                                            Create product
                                        </a>
                                    </>
                                )}
                            </div>
                        )}
                    </ul>
                )}
            </article>
        </section >
    )
}

import '../Home/home.css'

import React, { useContext } from "react";

import MyProducts from '../Profile/MyProducts.js';
import { useProductsContext, WoodContext } from '../../contexts/WoodContext.js';
import Spinner from '../Spinner/Spinner.js';

export default function Home() {

    const { products, isLoading } = useProductsContext();
    // const { products } = useContext(WoodContext)
    //console.log(products);

    const lastTwoProducts = products.slice(-2);
    //console.log(lastTwoProducts);

    return (
        <>
            <section id="home-page">
                <article className="auto-content">
                    <h1>Wood Woord Bulgaria</h1>
                </article>
            </section>
            <section id="home-page-content">
                <h1>Latest Products publication</h1>

                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <Spinner />
                    </div>
                ) : (
                    <div className="board">

                        {lastTwoProducts && lastTwoProducts.map(product =>
                            <MyProducts key={product._id} {...product} />)
                        }
                    </div>
                )}
            </section>
        </>
    )
}


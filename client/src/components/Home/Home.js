
import '../Home/home.css'

import React, { useContext } from "react";

import MyProducts from '../Profile/MyProducts.js';
import { useProductsContext, WoodContext } from '../../contexts/WoodContext.js';

export default function Home() {

    // const { products } = useContext(WoodContext)

    const { products } = useProductsContext()
    console.log(products);

    const lastTwoProducts = products.slice(-3);
    console.log(lastTwoProducts);

    return (
        <>
        
            <section id="home-page">
                <article className="auto-content">
                    <h1>Wood Woord Bulgaria</h1>
                </article>
            </section>
            <section id="home-page-content">
                <h1>Latest Products publication</h1>

                {lastTwoProducts
                    ? lastTwoProducts.map(product =>
                        <MyProducts key={product._id} {...product} />)
                    :
                    null
                }
            </section>


            {/* <img src="/img/furniture.jpg" className="d-block d-block w-50 h-30" alt="..." /> */}

            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="/img/furniture.jpg" className="d-block d-block w-50 h-30" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="/img/desktop.jpg" className="d-block d-block w-50 h-30" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/furniture.jpg" className="d-block d-block w-50 h-30" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



        </>
    )
}


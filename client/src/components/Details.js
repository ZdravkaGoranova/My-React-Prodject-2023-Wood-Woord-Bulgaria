import '../css/details.css'
import '../css/site.css'

import React from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const baseUrl = 'http://localhost:3030/jsonstore/woodTypes';

export default function Details({
    // id,
    // title,
    // description,
    // picture,
    // price
}) {
    const { productId } = useParams();
    console.log(productId);

    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    console.log(`${baseUrl}/${productId}`)
    useEffect(() => {
        fetch(`${baseUrl}/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                // const product = data['productId'];
                console.log(data)
                console.log(':)')

                setProduct(data)
            })
    }, [productId]);


    const onEdit = e => {
        e.preventDefault();
    };

    const onDelete = e => {
        e.preventDefault();
    };
    const onLike = e => {
        e.preventDefault();
    };

    const onBackButtonClick = e => {
        navigate('/catalog');
    };

    return (


        <section id="details-page">
            <h1>Details</h1>
            <article className="details-card">

                <article className="details-card-text">
                    <h2>Title:{product.title}<br /> </h2>
                    {/* <h3>Author: </h3> */}
                    <h3>Description:     {product.description}</h3>
                    <h3>Price:   {product.price} </h3>

                    {/* <!-- If there is no registered user, do not display buttons--> */}
                    {/* {{#if isAuthenticated}} */}
                    <div className="buttons">

                        {/* <!-- Only for registered user and author of the publication --> */}
                        <button className='btn-back' type='submit' onClick={onBackButtonClick}>Back</button>

                        {/* {{#if isOwner}} */}

                        <Link to={`/edit/${product._id}`} className="btn-edit" type='submit' >Edit</Link>
                        {/* <Link to={`/edit/${product._id}`} className="btn-edit" type='submit' onClick={onEdit}>Edit</Link> */}

                        <Link to={`/delete/${product._id}`} className="btn-delete" type='submit' >Delete</Link>
                        {/* {{else}}
                    {{#if isWished}} */}
                        {/* <!-- logged in user who has already shared the publication--> */}
                        <p className="shared-pub">You already shared this publication</p>
                        {/* ${isOwner == false && hasUser == true &&  hasLiked == 0  ? html`<a @click=${onLike} className="btn-like" href="#">Like</a>` : nothing} */}
                        {/* {{else}} */}
                        {/* <!-- logged in user who has not yet shared the publication--> */}
                        <Link to="/catalog/${product._id}}/shared" className="btn-share">Share publication</Link>
                        {/* ${isOwner == false && hasUser == true &&  hasLiked == 0  ? html`<a type='submit' onClick={onLike} className="btn-like" href="#">Like</a>` : nothing} */}
                        <a type='submit' onClick={onLike} className="btn-like" href="#">Like</a>
                        <p className="likes">Likes: </p>

                        
                    </div>

                </article>

                <article className="details-card-image">
                    <img src={product.picture} alt={product.title} />
                </article>

            </article>
        </section>

    )
}
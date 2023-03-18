import '../Details/details.css';

import React from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as productService from '../../services/productService.js'

const baseUrl = 'http://localhost:3030/jsonstore/woodTypes';

export default function Details() {
    const { productId } = useParams();
    console.log(productId);

    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        productService.getOne(productId)
            .then(data => {
                 console.log(data)
                setProduct(data)
            })
    }, [productId]);

    // const onLike = e => {
    //     e.preventDefault();
    // };
    const onBackButtonClick = e => {
        navigate('/catalog');
    };
    return (
        <section id="details-page">
            <h1>Details</h1>
            <article className="details-card">

                <article className="details-card-text">
                    <h2>Title:  {product.title}<br /> </h2>
                    {/* <h3>Author: </h3> */}
                    <h3>Description:     {product.description}</h3>
                    <h3>Price:   {product.price} </h3>
                    <h3>Type:   {product.type} </h3>
                    {/* <!-- If there is no registered user, do not display buttons--> */}
                    {/* {{#if isAuthenticated}} */}

                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {/* <!-- list all comments for current game (If any) --> */}
                            <li className="comment">
                                <p>UserID: I rate this one quite highly.</p>
                            </li>
                            <li className="comment">
                                <p>UserID: The best game.</p>
                            </li>
                        </ul>
                        {/* <!-- Display paragraph: If there are no games in the database --> */}
                        <p className="no-comment">No comments.</p>
                    </div>
                    <div className="buttons">

                        {/* <!-- Only for registered user and author of the publication --> */}
                        <button className='btn-back' type='submit' onClick={onBackButtonClick}>Back</button>

                        {/* {{#if isOwner}} */}

                        <Link to={`/edit/${product._id}`} className="btn-editt" type='submit' >Edit</Link>
                        {/* <Link to={`/edit/${product._id}`} className="btn-edit" type='submit' onClick={onEdit}>Edit</Link> */}

                        <Link to={`/delete/${product._id}`} className="btn-deletee" type='submit' >Delete</Link>
                        {/* {{else}}
                    {{#if isWished}} */}
                        {/* <!-- logged in user who has already shared the publication--> */}
                        <p className="shared-pub">You already shared this publication</p>
                        {/* ${isOwner == false && hasUser == true &&  hasLiked == 0  ? html`<a @click=${onLike} className="btn-like" href="#">Like</a>` : nothing} */}
                        {/* {{else}} */}
                        {/* <!-- logged in user who has not yet shared the publication--> */}
                        <Link to="/catalog/${product._id}}/shared" className="btn-share">Share publication</Link>
                        {/* ${isOwner == false && hasUser == true &&  hasLiked == 0  ? html`<a type='submit' onClick={onLike} className="btn-like" href="#">Like</a>` : nothing} */}

                        <p className="btn-like">Likes: </p>

                    </div>
                  

                    <article className="create-comment">
                        <label>Add new comment:</label>
                        <form className="form">
                            <textarea name="username" placeholder="Username"></textarea>
                            <textarea name="comment" placeholder="Comment......"></textarea>
                            <input className="btn submit" type="submit" value="Add Comment" />
                        </form>
                    </article>

                </article>
                <article className="details-card-image">
                    <img src={product.picture} alt={product.title} />
                </article>
            </article>
        </section>

    )
}
import '../Details/details.css';
import '..//Details/comments.css';

import React from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { WoodContext } from '../../contexts/WoodContext.js'
import { useService } from '../../hooks/useService.js';
import { AuthContext } from '../../contexts/AuthContext.js';

import { productServiceFactory } from '../../services/productService.js';
import * as  commentService from '../../services/commentService.js';
import * as likeService from '../../services/likeService.js';
import { AddComment } from './AddComment/AddComment.js';

export default function Details() {
    const { onWoodDeleteClick } = useContext(WoodContext);
    const { userId, userEmail, isAuthenticated } = useContext(AuthContext);
    const { productId } = useParams();
    //console.log(productId);

    const productService = useService(productServiceFactory)
    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    const isOwner = product._ownerId === userId;


    const productLikes = product?.likes
    console.log(productLikes);


    const isLiked = productLikes?.some(item => {
        return item.author._id === userId || item._ownerId === userId;
    });
    console.log(userId);
    console.log(isLiked);

    console.log(product.likes);

    console.log(product);

    useEffect(() => {

        Promise.all([
            productService.getOne(productId),
            commentService.getAll(productId),//промис чейнинг
            likeService.getAll(productId)
        ]).then(([productData, comments, likes]) => {
            const productState = {
                ...productData,
                comments,
                likes,
            };
            setProduct(productState)
            // dispatch({type: 'GAME_FETCH', payload: gameState})
        });


    }, [productId]);

    const onCommentSubmit = async (values) => {

        const response = await commentService.create(
            productId,
            values.comment,
            userEmail,
        )
        console.log(response)
        // setUsername("");
        // setComents("");
    };

    const onLike = async (values) => {

        const response = await likeService.create(
            productId,
            values.like,
            userEmail,
        )
        console.log(response)
    };

    const onBackButtonClick = (e) => {
        navigate('/catalog');
    };
    return (
        <section id="game-details">
            <h1>Product Details </h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={product.picture} />
                    <h1>{product.title}</h1>
                    <span className="levels">Type:   {product.type}</span>
                    <p className="type"> Owner:   {product._ownerId}</p>
                    <p className="type"> Price:   {product.price} $</p>
                </div>

                <p className="text">
                    {product.description}.
                </p>
                <div className="details-likes">
                    <h2>Likes: {product.likes?.length}</h2>

                    {isLiked && <p >You already liked the product!</p>}

                    {product.likes?.length === 0 &&

                        (<p className="no-comment">No likes.</p>)}
                </div>
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {product.comments && product.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>
                    {product.comments?.length === 0 &&
                        (<p className="no-comment">No comments.</p>)}
                </div>

                <div className="buttons">

                    <button className='button' type='submit' onClick={onBackButtonClick}>Back</button>

                    {isOwner &&
                        <>
                            <Link to={`/edit/${product._id}`} className="button">Edit</Link>
                            {/* <Link to={`/delete/${product._id}`}  className="button">Delete</Link> */}
                            <button className='button' type='submit' onClick={() => onWoodDeleteClick(productId)} >Delete</button>
                            {/* onClick={() => onWoodDeleteClick(productId)} */}
                        </>
                    }
                    {(isAuthenticated && !isOwner && !isLiked) &&
                        <button className="button" onClick={onLike} >Likes</button>
                    }

                </div>
            </div>

            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

        </section>
    )
}



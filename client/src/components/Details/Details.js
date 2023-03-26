import '../Details/details.css';
import '..//Details/comments.css';

import React from "react";
import { useParams, useNavigate,Link } from 'react-router-dom'
import { useEffect, useState, useContext, } from 'react';


import { WoodContext } from '../../contexts/WoodContext.js'
import { useService } from '../../hooks/useService.js';
import { AuthContext } from '../../contexts/AuthContext.js';

import { productServiceFactory } from '../../services/productService.js';
import { AddComment } from './AddComment/AddComment.js';
import * as  commentService from '../../services/commentService.js';
import * as likeService from '../../services/likeService.js';


export default function Details(

) {
    const { onWoodDeleteClick } = useContext(WoodContext);
    const { userId, userEmail, isAuthenticated } = useContext(AuthContext);
    const { productId } = useParams();
    //console.log(productId);
    const navigate = useNavigate()
    const productService = productServiceFactory();

    const [product, setProduct] = useState({});

    const isOwner = product._ownerId === userId;

    const productLikes = product?.likes
    console.log(productLikes);

    const isLiked = productLikes?.some(item => {
        return item.author?._id === userId || item?._ownerId === userId;
    });


    useEffect(() => {

        Promise.all([
            productService.getOne(productId),
            commentService.getAll(productId),//промис чейнинг
            likeService.getAll(productId)
        ])
            .then(([productData, comments, likes]) => {
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

        setProduct(state => ({
            ...state,
            comments: [...state.comments, {
                ...response,
                author: {
                    email: userEmail
                }
            }]
        }))

    };

    const onLike = async (values) => {
        const response = await likeService.create(
            productId,
            values.like,
            userEmail,
        )
        console.log(response)

        setProduct(state => ({
            ...state,
            likes: [...state.likes, response]
        }))
    };

    const onBackButtonClick = (e) => {
        navigate('/catalog');
    };
    return (
        <>
            <div className="card mb-3"  >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.picture} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>

                            {/* <div className="alert alert-warning alert-dismissible fade show" role="alert"><strong>Type:</strong>  {product.type}</div>
                            <div className="alert alert-warning alert-dismissible fade show" role="alert"><strong>Owner: </strong>   {product._ownerId}</div>
                            <div className="alert alert-warning alert-dismissible fade show" role="alert"><strong>Price:</strong>  {product.price}</div>  */}

                            <p className="card-text"><small className="text-body-secondary">Type:   {product.type}</small></p>
                            <p className="card-text"><small className="text-body-secondary">Owner:   {product._ownerId}</small></p>
                            <p className="card-text"><small className="text-body-secondary">Price:   {product.price}</small></p>

                            <p className="card-text">{product.description}</p>


                            <span className="btn btn-outline-warning btn-custom">
                                Likes: {product.likes?.length}
                                {product.likes?.length === 0 && <p className="no-comment">No likes.</p>}
                            </span>

                            <div className="details-comments">
                                <h4>Comments:</h4>
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

                                {/* <button className='button' type='submit' onClick={onBackButtonClick}>Back</button> */}
                                <button type="button" className="btn btn-outline-warning btn-custom" onClick={onBackButtonClick}>Back</button>

                                {isOwner &&
                                    <>
                                        <Link to={`/edit/${product._id}`} className="btn btn-outline-warning btn-custom">Edit</Link>
                                        {/* <Link to={`/edit/${product._id}`} className="button">Edit</Link> */}

                                        <button className="btn btn-outline-warning btn-custom" onClick={() => onWoodDeleteClick(productId)} >Delete</button>
                                        {/* <button className='button' type='submit' onClick={() => onWoodDeleteClick(productId)} >Delete</button> */}


                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Delete
                                        </button>
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel"> Delete a product </h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Are you sure you want to delete a product with a title {product.title}?
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >No</button>
                                                        <button type="button" className="btn btn-primary"  onClick={() => {onWoodDeleteClick(productId)} }>Yes</button>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>

                                    </>
                                }
                                {isLiked && <button className="btn btn-outline-warning btn-custom">You already liked the product!</button>}

                                {(isAuthenticated && !isOwner && !isLiked) &&
                                    // <button className="btn btn-outline-warning btn-custom" onClick={onLike} >Likes</button>

                                    <button type="button" className="btn btn-primary" onClick={onLike}>
                                        Likes: <span className="badge text-bg-secondary">{product.likes?.length}</span>
                                    </button>

                                }

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </>


        //     <section id="game-details">
        //         <h1>Product Details </h1>
        //         <div className="info-section">

        //             <div className="game-header">
        //                 <img className="game-img" src={product.picture} />
        //                 <h1>{product.title}</h1>
        //                 <span className="levels">Type:   {product.type}</span>
        //                 <p className="type"> Owner:   {product._ownerId}</p>
        //                 <p className="type"> Price:   {product.price} $</p>
        //             </div>

        //             <p className="text">
        //                 {product.description}.
        //             </p>
        //             <div className="details-likes">
        //                 <h2>Likes: {product.likes?.length}</h2>
        //                 {product.likes?.length === 0 && <p className="no-comment">No likes.</p>}
        //             </div>

        //             <div className="details-comments">
        //                 <h2>Comments:</h2>
        //                 <ul>
        //                     {product.comments && product.comments.map(x => (
        //                         <li key={x._id} className="comment">
        //                             <p>{x.author.email}: {x.comment}</p>
        //                         </li>
        //                     ))}
        //                 </ul>
        //                 {product.comments?.length === 0 &&
        //                     (<p className="no-comment">No comments.</p>)}
        //             </div>

        //             <div className="buttons">

        //                 {/* <button className='button' type='submit' onClick={onBackButtonClick}>Back</button> */}
        //                 <button type="button" className="btn btn-outline-warning btn-custom" onClick={onBackButtonClick}>Back</button>

        //                 {isOwner &&
        //                     <>
        //                         <Link to={`/edit/${product._id}`} className="btn btn-outline-warning btn-custom">Edit</Link>
        //                         {/* <Link to={`/edit/${product._id}`} className="button">Edit</Link> */}

        //                         <button className="btn btn-outline-warning btn-custom" onClick={() => onWoodDeleteClick(productId)} >Delete</button>
        //                         {/* <button className='button' type='submit' onClick={() => onWoodDeleteClick(productId)} >Delete</button> */}

        //                     </>
        //                 }
        //                 {isLiked && <button className="btn btn-outline-warning btn-custom">You already liked the product!</button>}

        //                 {(isAuthenticated && !isOwner && !isLiked) &&
        //                     <button className="btn btn-outline-warning btn-custom" onClick={onLike} >Likes</button>

        //                 }

        //             </div>
        //         </div>
        //         {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

        //     </section>
    )
}



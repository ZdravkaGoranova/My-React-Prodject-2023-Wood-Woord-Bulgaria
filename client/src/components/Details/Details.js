import '../Details/details.css';
import '../Details/AddComment/comments.css';

import React from "react";
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState, useContext, useReducer} from 'react';

import { WoodContext, useProductsContext } from '../../contexts/WoodContext.js'
import { AuthContext } from '../../contexts/AuthContext.js';

import { productServiceFactory } from '../../services/productService.js';
import { AddComment } from './AddComment/AddComment.js';
import * as  commentService from '../../services/commentService.js';
import * as likeService from '../../services/likeService.js';
import { productReducer } from '../../reducers/productReducer.js';

export default function Details(

) {
    //const { deleteProduct } = useProductsContext();

    const navigate = useNavigate();

    //const { onWoodDeleteClick } = useContext(WoodContext);

    const { userId, userEmail, isAuthenticated } = useContext(AuthContext);
    console.log(userId)

    const { productId } = useParams();
    console.log(productId)

    const productService = productServiceFactory();

    //const [product, setProduct] = useState({});
    const [product, dispatch] = useReducer(productReducer, {});

    const isOwner = product._ownerId === userId;

    const productLikes = product?.likes

    const isLiked = productLikes?.some(item => {
        return item.author?._id === userId || item?._ownerId === userId;
    });
   // console.log(isLiked)

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
                // setProduct(productState)
                dispatch({ type: 'PRODUCT_FETCH', payload: productState })

            });
    }, [productId]);

    console.log(product)

    const deleteProduct = async (productId) => {
        try {
            const result = await productService.delProduct(productId)
            dispatch({ type: "DELETE_PRODUCT", payload: { id: productId } })
          
             navigate(`/profile/${userId}`);
        } catch (error) {
            dispatch({ type: "GET_PRODUCT_ERROR" })
        }
    }

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(
            productId,
            values.comment,
            userEmail,
        )
        console.log(response)

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail,
        });

        // setProduct(state => ({
        //     ...state,
        //     comments: [...state.comments, {
        //         ...response,
        //         author: {
        //             email: userEmail
        //         }
        //     }]
        // }))

    };

    const onLike = async (values) => {
        const response = await likeService.create(
            productId,
            values.like,
            userEmail,
        )
        console.log(response)

        dispatch({
            type: "LIKE_ADD",
            payload: response,
        });

        // setProduct(state => ({
        //     ...state,
        //     likes: [...state.likes, response]
        // }))
    };

    const onBackButtonClick = (e) => {
        navigate('/catalog');
    };
    return (
        <>
            <div className="card mb-3"  >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.picture} className="img-fluid rounded-start" alt={product.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Title: {product.title}</h5>

                            <div className="alert alert-warning alert-dismissible fade show" role="alert"><strong>Type:</strong>  {product.type}</div>
                            {/* <div className="alert alert-warning alert-dismissible fade show" role="alert"><strong>Owner: </strong>   {product._ownerId}</div> */}
                            <div className="alert alert-warning alert-dismissible fade show" role="alert"><strong>Price:</strong>  {product.price}</div> 
{/* 
                            <p className="card-text"><small className="text-body-secondary">Type:   {product.type}</small></p>
                            <p className="card-text"><small className="text-body-secondary">Owner:   {product._ownerId}</small></p>
                            <p className="card-text"><small className="text-body-secondary">Price:   {product.price}</small></p> */}

                            <p className="card-text">Description: {product.description}</p>


                            <button type="button" className="btn btn-primary position-relative btn btn-outline-warning btn-custom">
                                Likes <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{product.likes?.length} <span className="visually-hidden">unread messages</span></span>
                            </button>

                            <div className="details-comments">

                                <h4>Comments:</h4>

                                <ul className="list-unstyled comment-list">

                                    {product.comments && product.comments.map(x => (
                                        <li key={x._id} className=" d-inline-block position-relative py-2 px-4 btn btn-outline-warning btn-custom border-dark rounded-pill text-dark comment-item" >

                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="position-absolute top-100 start-50 translate-middle mt-1 text-dark">
                                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                            </svg>
                                            <p className="ms-5 mb-0">{x.author.email}: {x.comment}</p>
                                        </li>
                                    ))
                                    }
                                </ul>
                                {product.comments?.length === 0 &&
                                    (<p className="no-comment">No comments.</p>)}
                            </div>

                            <div className="buttons">

                                <button type="button" className="btn btn-light btn-custom ml-3" onClick={onBackButtonClick}>Back</button>

                                {isOwner &&
                                    <>
                                        <Link to={`/edit/${product._id}`} className="btn btn-light btn-custom ml-3">Edit</Link>

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
                                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"  onClick={() => { deleteProduct(productId) }}>Yes</button>
                                                        {/* <button type="button" className="btn btn-primary" onClick={() => { onWoodDeleteClick(productId) }}>Yes</button> */}
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                }
                                {isLiked && <button className="btn btn-light btn-custom ml-3">You already liked the product!</button>}

                                {(isAuthenticated && !isOwner && !isLiked) &&

                                    <button type="button" className="btn btn-light btn-custom ml-3" onClick={onLike}>Likes </button>
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



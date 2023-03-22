import '../Details/details.css';
import '..//Details/comments.css';

import React from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import { WoodContext } from '../../contexts/WoodContext.js'
import { useService } from '../../hooks/useService.js';

import { Link } from 'react-router-dom';
import { productServiceFactory } from '../../services/productService.js';
import * as commentService from '../../services/commentService.js';
import * as likeService from '../../services/likeService.js';

export default function Details() {
    const { onWoodDeleteClick } = useContext(WoodContext)

    const { productId } = useParams();
    //console.log(productId);
    const productService = useService(productServiceFactory)

    const [product, setProduct] = useState({});


    const [username, setUsername] = useState("");
    const [comment, setComent] = useState("");
    const [comments, setComents] = useState([]);

    const [like, setLike] = useState(0);
    const [likes, setLikes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        productService.getOne(productId)
            .then(data => {
                console.log(data);
                setProduct(data);
                return commentService.getAll(productId)//промис чейнинг
            })
            .then(result => {
                setComents(result)
            })
    }, [productId]);

    const onCommentSubmit = async (e) => {
        e.preventDefault();
        await commentService.create({
            productId,
            like,
            username,
        })
        setUsername("");
        setComents("");
    };

    const onLike = async (e) => {
        e.preventDefault();

        await likeService.create({
            productId: productId,
            like: likes,
        })
    };

    const onUsernameChange = (e) => {
        setUsername(e.target.value)

    };
    const onCommentChange = (e) => {
        setComent(e.target.value)

    };
    const onBackButtonClick = (e) => {
        navigate('/catalog');
    };
    return (
        <section id="game-details">
            <h1>Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={product.picture} />
                    <h1>{product.title}</h1>
                    <span className="levels">Type:   {product.type}</span>

                    <p className="type"> Price:   {product.price}</p>
                </div>

                <p className="text">
                    {product.description}.
                </p>
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(x => (
                            <li className="comment">
                                <p>{x.username}: {x.comment}</p>
                            </li>
                        ))}

                    </ul>
                    {comments.length === 0 &&
                        (<p className="no-comment">No comments.</p>)}
                </div>
                <div className="buttons">
                    <button className="button" onClick={onLike} >Likes</button>
                    <button className='button' type='submit' onClick={onBackButtonClick}>Back</button>
                    <Link to={`/edit/${product._id}`} className="button">Edit</Link>
                    {/* <Link to={`/delete/${product._id}`}  className="button">Delete</Link> */}
                    <button className='button' type='submit' onClick={() => onWoodDeleteClick(productId)} >Delete</button>
                    {/* onClick={() => onWoodDeleteClick(productId)} */}
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmit}>
                    {/* <input type="text" name="username" placeholder="Ivan" value={username} onChange={onUsernameChange}> </input> */}
                    <input type="text" name="username" placeholder='Ivan' value={username} onChange={onUsernameChange}></input>
                    <textarea name="comment" placeholder="Comment......" value={comment} onChange={onCommentChange}></textarea>
                    <input className="button" type="submit" value='Add Comment'></input>
                </form>

            </article>
        </section>
    )
}



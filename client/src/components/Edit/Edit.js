import '../Edit/create-edit.css'

import React, { useState, useEffect, useContext } from 'react';
import { productServiceFactory } from '../../services/productService.js'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useService } from '../../hooks/useService.js';


import { WoodContext, useProductsContext } from '../../contexts/WoodContext.js'


export default function Edit() {
    const productService = useService(productServiceFactory)
    const {  updateProduct } = useProductsContext();

    const { productId } = useParams();
    //console.log(productId);

    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        description: "",
        picture: "",
        price: "",
        type: "",

    });

    useEffect(() => {
        productService.update(productId)
            .then(data => {
                // const product = data['productId'];
                console.log(data)
                setProduct(data)
            })
    }, [productId]);


    const onSubmitHandler = async (e, productData) => {
        e.preventDefault();

        console.log(':):):)')
        try {
            await updateProduct(productId, productData)

            navigate(`/details/${productId}`, { replace: true });

        } catch (err) {
            alert(err);
        }

    };
    const onChangeHandler = (e) => {
        setProduct(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    return (
        <section id="edit-container">
            <div className="edit-container-info">

                <img src={product?.picture} alt="image" />

                <form onSubmit={(e) => onSubmitHandler(e, product)} className="container-text">

                    <h2>Edit</h2>
                    <p>Edit your wood product!</p>

                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" id="title" name="title" value={product?.title} onChange={onChangeHandler} />

                    <label htmlFor="painting-tech" className="form-label">Description:</label>
                    <input type="text" id="painting-tech" name="description" value={product?.description} onChange={onChangeHandler} />

                    <label htmlFor="picture" className="form-label">Wood picture:</label>
                    <input type="text" id="picture" name="picture" value={product?.picture} onChange={onChangeHandler} />

                    <label htmlFor="certificate" className="form-label">Price:</label>
                    <input type="text" id="certificate" placeholder="Yes" name="price" value={product?.price} onChange={onChangeHandler} />


                    <label htmlFor="type">Type:</label>
                    <select type="type" id="certificate" name="type" value={product?.type} onChange={onChangeHandler} >
                        <option value="spoons" name="spoons">Spoons</option>
                        <option value="chairs" name="chairs">Chairs</option>
                        <option value="ladles" name="ladles">Ladles</option>
                        <option value="furnitures" name="furnitures">Furnitures</option>
                        <option value="toolboxes" name="toolboxes">Toolboxes</option>
                        <option value="handtools" name="handtools">Handtools</option>
                        <option value="other" name="other">Оther</option>
                    </select>
                    <button type="submit" className="btn btn-outline-warning btn-custom">Edit</button>

                </form>

            </div>
        </section>
    )
}

{/* <label htmlFor="title">Title:</label>
<input type="text" id="title" name="title" value={product?.title} onChange={onChangeHandler} />

<label htmlFor="painting-tech">Description:</label>
<input type="text" id="painting-tech" name="description" value={product?.description} onChange={onChangeHandler} />

<label htmlFor="picture">Wood picture:</label>
<input type="text" id="picture" name="picture" value={product?.picture} onChange={onChangeHandler} />

<label htmlFor="certificate">Price:</label>
<input type="text" id="certificate" placeholder="Yes" name="price" value={product?.price} onChange={onChangeHandler} />
<label htmlFor="type">Type:</label>
<select type="type" id="certificate" name="type" value={product?.type} onChange={onChangeHandler} >
    <option value="spoons" name="spoons">Spoons</option>
    <option value="chairs" name="chairs">Chairs</option>
    <option value="ladles" name="ladles">Ladles</option>
    <option value="furnitures" name="furnitures">Furnitures</option>
    <option value="toolboxes" name="toolboxes">Toolboxes</option>
    <option value="handtools" name="handtools">Handtools</option>
    <option value="other" name="other">Оther</option>
</select>
<button className="edit-btn" >Edit</button> */}
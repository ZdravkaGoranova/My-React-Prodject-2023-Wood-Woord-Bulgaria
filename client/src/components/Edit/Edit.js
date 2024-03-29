import '../Edit/create-edit.css'

import React, { useState, useEffect, useContext } from 'react';
import { productServiceFactory } from '../../services/productService.js'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useService } from '../../hooks/useService.js';

import { WoodContext } from '../../contexts/WoodContext.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import Spinner from '../Spinner/Spinner.js';


export default function Edit() {
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();
    const { updateProduct } = useContext(WoodContext)
    const { errorMessage, showErrorMessage, hideErrorBox, setErrorMessage } = useContext(AuthContext);

    const productService = useService(productServiceFactory);

    const { productId } = useParams();
    //console.log(productId);

    const [product, setProduct] = useState({
        title: "",
        description: "",
        picture: "",
        price: "",
        type: "",
    });

    useEffect(() => {
        setIsLoading(true);
        productService.update(productId)
            .then(data => {
                // const product = data['productId'];
                console.log(data)
                setProduct(data)
                setIsLoading(false);
            })
    }, [productId]);


    const onSubmitHandler = async (e, productData) => {
        e.preventDefault();
        if (!productData.picture.startsWith("https://")) {
            // alert("Please enter a valid URL address!");
            setErrorMessage("Please enter a valid URL address");
        }
        else if (productData.title === "") {
            //alert("Please enter a valid title!");
            setErrorMessage("Please enter a valid title");
        }
        else if (productData.title.length < 4) {
            //alert("Please enter a valid title!");
            setErrorMessage("The length of the title should be at least 4 characters!");
        }
        else if (productData.description === "") {
            //alert("Please enter a valid description!");
            setErrorMessage("Please enter a valid description");
        }
        else if (productData.description.length < 10) {
            //alert("Please enter a valid title!");
            setErrorMessage("The length of the description should be at least 10 characters!");
        }
        else if (productData.price === "") {
            // alert("Please enter a valid price!");
            setErrorMessage("Please enter a valid price!");
        }

        else {
            try {
                setIsLoading(true);
                //    await  productService.update(productId, productData)
                await updateProduct(productId, productData)
                    .then(() => {
                        navigate(`/details/${productId}`);
                        setIsLoading(false);
                    });
            } catch (err) {
                // alert(err);
                setErrorMessage(err)
                setIsLoading(false);
            }
        }

    };
    const onChangeHandler = (e) => {
        setProduct(state => ({ ...state, [e.target.name]: e.target.value }))
    };


    return (
        <>
         {isLoading && <Spinner />}
            {showErrorMessage && errorMessage && (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Attention!</strong> {errorMessage}
                    <button type="button" onClick={hideErrorBox} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}


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
                        <input type="text" id="certificate" placeholder="10" name="price" value={product?.price} onChange={onChangeHandler} pattern="^\d+(\.|,)?\d*$" title="Price should only contain numbers" />


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
        </>
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
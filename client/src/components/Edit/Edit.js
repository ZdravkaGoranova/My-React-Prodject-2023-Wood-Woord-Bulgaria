import '../Edit/create-edit.css'


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const baseUrl = 'http://localhost:3030/jsonstore/woodTypes';

export default function Edit({
    // id,
    // title,
    // description,
    // picture,
    // price,
    // type
}) {

    const { productId } = useParams();
    console.log(productId);

    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        description: "",
        picture: "",
        price: "",
        type: "",

    });


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


    const update = async (productId, product) => {
        const { ...data } = product;

        const response = await fetch(`${baseUrl}/products/${productId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        return result.user;
    };

    const onSubmitHandler = (e, productData) => {
        e.preventDefault();

        console.log(':):):)')
        if (!productData.picture.startsWith("https://")) {
            alert("Please enter a valid URL address");
        } else {
            try {
                update(productId, productData)
                    .then(() => {
                        navigate(`/details/${productId}`, { replace: true });
                    });
            } catch (err) {
                alert(err);
            }
        }


    };
    const onChangeHandler = (e) => {
        setProduct(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onEdit = e => {
        e.preventDefault();


    };
    return (

        <section id="edit-container">
            <div className="edit-container-info">

                <img src={product?.picture} alt="image" />

                <form onSubmit={(e) => onSubmitHandler(e, product)} className="container-text">

                    <h2>Edit</h2>
                    <p>Edit your wood product!</p>

                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={product?.title}// value={product.title}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="painting-tech">Description:</label>
                    <input
                        type="text"
                        id="painting-tech"
                        name="description"
                        value={product?.description}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="picture">Wood picture:</label>
                    <input
                        type="text"
                        id="picture"
                        name="picture"
                        value={product?.picture}// value={product.picture}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="certificate">Price:</label>
                    <input type="text"
                        id="certificate"
                        placeholder="Yes"
                        name="price"
                        value={product?.price}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="type">Type:</label>
                    <select
                        type="type"
                        id="certificate"
                        name="type"
                        value={product?.type}
                        onChange={onChangeHandler}
                    >
                        <option value="spoons" name="spoons">Spoons</option>
                        <option value="chairs" name="chairs">Chairs</option>
                        <option value="ladles" name="ladles">Ladles</option>
                        <option value="furnitures" name="furnitures">Furnitures</option>
                        <option value="toolboxes" name="toolboxes">Toolboxes</option>
                        <option value="handtools" name="handtools">Handtools</option>
                        <option value="other" name="other">Оther</option>
                    </select>
                    <button className="edit-btn" >Edit</button>
                </form>

            </div>
        </section>
    )
}
import '../css/create-edit.css'
import '../css/site.css'

import React, { useState } from 'react';
export default function Edit({
    id,
    title,
    description,
    picture,
    price,
    type
}) {
    const [formValues, setFormValues] = useState({
        title: "",
        description: "",
        picture: "",
        price: 0,
        type: "spoons",

    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log();
    };
    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onEdit = e => {
        e.preventDefault();
    };
    return (

        <section id="edit-container">
            <div className="edit-container-info">

                <img src="/img/tools.jpg" alt="image" />

                <form onSubmit={onSubmitHandler} className="container-text">
                    <h2>Edit</h2>
                    <p>Edit your masterpiece!</p>

                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formValues.title}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="painting-tech">Description:</label>
                    <input
                        type="text"
                        id="painting-tech"
                        name="description"
                        value={formValues.description}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="picture">Wood picture:</label>
                    <input
                        type="text"
                        id="picture"
                        name="picture"
                        value={formValues.picture}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="certificate">Price:</label>
                    <input type="text"
                        id="certificate"
                        placeholder="Yes"
                        name="price"
                        value={formValues.price}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="type">Type:</label>
                    <select
                        type="type"
                        id="certificate"
                        name="type"
                        value={formValues.type}
                        onChange={onChangeHandler}
                    >
                        <option value="spoons">Spoons</option>
                        <option value="crockery">Crockery</option>
                        <option value="sculptures">Sculptures</option>
                        <option value="furnitures">Furnitures</option>
                        <option value="toolboxes">Toolboxes</option>
                        <option value="athers">Оther</option>
                    </select>
                    <button className="edit-btn" onClick={onEdit}>Edit</button>
                </form>

            </div>
        </section>
    )
}
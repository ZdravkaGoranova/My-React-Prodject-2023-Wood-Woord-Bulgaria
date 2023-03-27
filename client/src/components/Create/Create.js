
import '../Create/create-edit.css'

import { useContext, } from 'react';

import { useForm } from '../../hooks/useForm.js';
import { WoodContext, useProductsContext } from '../../contexts/WoodContext.js'


export default function Create() {
    //const { onSubmitCreateProduct } = useContext(WoodContext)

//navigate("/catalog", { replace: true });
    const { addProduct } = useProductsContext();



    const { product, onChangeHandler, onSubmit } = useForm({
        title: "",
        description: "",
        picture: "",
        price: "",
        type: "",
    }, addProduct);
    // },onSubmitCreateProduct);

    return (
        <section id="create-container">
            <div className="create-container-info">

                <img src="/img/tools.jpg" alt="image" />

                <form onSubmit={onSubmit} className="container-text">

                    <h2>Create Product</h2>
                    <p>Add your own wood product!</p>

                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" placeholder="Handmade product " name="title" value={product?.title} onChange={onChangeHandler} />

                    <label htmlFor="painting-tech">Description:</label>
                    <input type="text" id="painting-tech" placeholder="Wood product..." name="description" value={product?.description} onChange={onChangeHandler} />

                    <label htmlFor="picture">Wood picture:</label>
                    <input type="text" id="picture" placeholder="http://..." name="picture" value={product?.picture} onChange={onChangeHandler} />

                    <label htmlFor="certificate">Price:</label>
                    <input type="text" id="certificate" placeholder="10" name="price" value={product?.price} onChange={onChangeHandler} />
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

                    <button className="btn btn-outline-warning btn-custom" type='submit' >Create</button>
                </form>
            </div>
        </section>

    )
}


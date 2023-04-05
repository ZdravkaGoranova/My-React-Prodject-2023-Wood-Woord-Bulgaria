
import '../Create/create-edit.css'

import { useContext, useEffect, useState, } from 'react';

import { useForm } from '../../hooks/useForm.js';
import { WoodContext, useProductsContext } from '../../contexts/WoodContext.js'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext.js';


export default function Create() {
    //const { onSubmitCreateProduct } = useContext(WoodContext)

    const navigate = useNavigate()

    const { addProduct } = useProductsContext();
    const { userId, errorMessage, showErrorMessage, hideErrorBox, setErrorMessage } = useContext(AuthContext);


    // function submitHandler() {
    //     onSubmit()
    //     navigate("/catalog", { replace: true });
    // }

    // const { product, onChangeHandler,onSubmit } = useForm({
    //     title: "",
    //     description: "",
    //     picture: "",
    //     price: "",
    //     type: "",
    // }, addProduct);
    // },onSubmitCreateProduct);

    const [product, setProduct] = useState({
        title: "",
        description: "",
        picture: "",
        price: "",
        type: "",

    });


    const onSubmitHandler = async (e, productData) => {
        e.preventDefault();

        console.log(':):):)')
        console.log(typeof productData.price)
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
                //    await  productService.create(productData)
                await addProduct(productData)
                    .then(() => {
                        navigate(`/profile/${userId}`);
                    });
            } catch (err) {
                //alert(err);
                setErrorMessage(err)
            }
        }
    }
    const onChangeHandler = (e) => {
        setProduct(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    return (
        <>

            {showErrorMessage && errorMessage && (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Attention!</strong> {errorMessage}
                    <button type="button" onClick={hideErrorBox} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}


            <section id="create-container">
                <div className="create-container-info">

                    <img src="/img/tools.jpg" alt="image" />

                    <form onSubmit={(e) => onSubmitHandler(e, product)} className="container-text">

                        <h2>Create Product</h2>
                        <p>Add your own wood product!</p>

                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" placeholder="Handmade product " name="title" value={product?.title} onChange={onChangeHandler} />

                        <label htmlFor="painting-tech">Description:</label>
                        <input type="text" id="painting-tech" placeholder="Wood product..." name="description" value={product?.description} onChange={onChangeHandler} />

                        <label htmlFor="picture">Wood picture:</label>
                        <input type="text" id="picture" placeholder="http://..." name="picture" value={product?.picture} onChange={onChangeHandler} />

                        <label htmlFor="certificate">Price:</label>
                        <input type="text" id="certificate" placeholder="10" name="price" value={product?.price} onChange={onChangeHandler} pattern="^\d+(\.|,)?\d*$" title="Price should only contain numbers" />
                        <label htmlFor="type">Type:</label>
                        <select type="type" id="certificate" name="type" value={product?.type} onChange={onChangeHandler} >
                            <option value="spoons" name="spoons">Spoons</option>
                            <option value="chairs" name="chairs">Chairs</option>
                            <option value="ladles" name="ladles">Ladles</option>
                            <option value="furnitures" name="furnitures">Furnitures</option>
                            <option value="toolboxes" name="toolboxes">Toolboxes</option>
                            <option value="handtools" name="handtools">Handtools</option>
                            <option value="other" name="other">Other</option>
                        </select>

                        <button className="btn btn-outline-warning btn-custom" type='submit' >Create</button>
                    </form>
                </div>
            </section>
        </>
    )
}



import '../Create/create-edit.css'

import  { useEffect,useState,useContext} from 'react';
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthContext";
import * as productService from '../../services/productService.js'

const baseUrl = 'http://localhost:3030/jsonstore/woodTypes';

export default function Create({
    onSubmitCreateProduct,
}) {

    // const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // const token = user.accessToken;
    // const _ownerId = user._id;
    
    const [product, setProduct] = useState({
        title: "",
        description: "",
        picture: "",
        price: "",
        type: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitCreateProduct(product)
}
    // const onSubmitCreateProduct = (e,productData) => {
    //     e.preventDefault();
      
    //     console.log(':):):)');
        
    //   const newProduct=  productService.create({ ...productData })
    //     setProduct(state=>[...state,newProduct])
    //     navigate("/catalog", { replace: true });

    //     // if (!productData.picture.startsWith("https://")) {
    //     //     alert("Please enter a valid URL address");
    //     // } else {
    //     //     try {
                      
    //     // console.log('тук си')
    //     //         create({ ...productData })
    //     //             .then(() => {
    //     //                 navigate("/catalog", { replace: true });
    //     //             });
    //     //     } catch (err) {
    //     //         alert(err);
    //     //     }
    //     // }
    // };
    const onChangeHandler = (e) => {
        setProduct(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    return (
        <section id="create-container">
            <div className="create-container-info">

                <img src="/img/tools.jpg" alt="image" />

                <form  onSubmit={onSubmit} className="container-text">

                    <h2>Create Product</h2>
                    <p>Add your own wood product!</p>

                    <label htmlFor="title">Title:</label>
                    <input 
                    type="text" 
                    id="title"
                     placeholder="Handmade product "
                     name="title"
                     value={product?.title}
                     onChange={onChangeHandler}
                     />

                    <label htmlFor="painting-tech">Description:</label>
                    <input 
                    type="text"
                     id="painting-tech"
                     placeholder="Wood product..."
                     name="description"
                     value={product?.description}
                     onChange={onChangeHandler}
                     />

                    <label htmlFor="picture">Wood picture:</label>
                    <input 
                    type="text"
                     id="picture" 
                    placeholder="http://..."
                     name="picture" 
                    value={product?.picture} 
                    onChange={onChangeHandler}
                    />

                    <label htmlFor="certificate">Price:</label>
                    <input
                    type="text"
                     id="certificate"
                     placeholder="10" 
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

                    <button className="create-btn" type='submit' >Create</button>

                </form>

            </div>
        </section>

    )
}


    // useEffect(() => {
    //     fetch(`${baseUrl}/products`)
    //         .then(res => res.json())
    //         .then(data => {
           
    //             console.log(data)
    //             console.log(':)')

    //             setProduct(data)
    //         })
    // }, []);


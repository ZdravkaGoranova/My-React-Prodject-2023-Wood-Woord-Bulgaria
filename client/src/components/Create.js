
import '../css/create-edit.css'
import '../css/site.css'


import  { useEffect,useState,useContext} from 'react';
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthContext";

const baseUrl = 'http://localhost:3030/jsonstore/woodTypes';

export default function Create({
    // title,
    // description,
    // picture,
    // price,
    // type,
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

    
    // useEffect(() => {
    //     fetch(`${baseUrl}/products`)
    //         .then(res => res.json())
    //         .then(data => {
           
    //             console.log(data)
    //             console.log(':)')

    //             setProduct(data)
    //         })
    // }, []);

    const create = async (productData) => {
        const {  ...data } = productData;
        console.log("----------");
        console.log(productData);
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    
        const result = await response.json();
        console.log(result);
       
        console.log("краи");
        return result;
    };

    const onSubmitHandler = (e,productData) => {
        e.preventDefault();
      
        console.log(':):):)')
   
        if (!productData.picture.startsWith("https://")) {
            alert("Please enter a valid URL address");
        } else {
            try {
                      
        console.log('тук си')
                create({ ...productData })
                    .then(() => {
                        navigate("/catalog", { replace: true });
                    });
            } catch (err) {
                alert(err);
            }
        }
    };
    const onChangeHandler = (e) => {
        setProduct(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onCreate = (e) => {
        // e.preventDefault();//да не прзаревда страницата

        // const formData = new FormData(e.curentTarget);

        // const data = Object.fromEntries(formData)
        // console.log(data);



    }

    return (
        <section id="create-container">
            <div className="create-container-info">

                <img src="/img/tools.jpg" alt="image" />

                <form  onSubmit={(e) => onSubmitHandler(e, product)} className="container-text">

                    <h2>Create Publication</h2>
                    <p>Add your own masterpiece!</p>

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
                         <option value="spoons">Spoons</option>
                         <option value="crockery">Crockery</option>
                         <option value="sculptures">Sculptures</option>
                         <option value="furnitures">Furnitures</option>
                         <option value="toolboxes">Toolboxes</option>
                        <option value="athers">Оther</option>
                     </select>

                    <button className="create-btn" type='submit' >Create</button>

                </form>

            </div>
        </section>

    )
}




// import '../css/create-edit.css'
// import '../css/site.css'
// import { useEffect, useState } from 'react'

// export default function Create({
//     title,
//     description,
//     picture,
//     price,
// }) {

//     // const [title, setTitle] = useState('');
//     // const [description, setDescription] = useState('');
//     // const [picture, setPicture] = useState('');
//     // const [price, setPrice] = useState(0);
//     // const [type, setType] = useState('spoons');


//     const [formValues, setFormValues] = useState({
//         title: "",
//         description: "",
//         picture: "",
//         price: 0,
//         type: "spoons",

//     });
//     const onSubmitHandler = (e) => {//неконтролируеми компоненти */}
//         e.preventDefault();
       
//     };
//     const onChangeHandler = (e) => {
//         setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))

//     };

//     // const onTitleChange = (e => {
//     //     console.log(e.target.value)
//     //     setTitle(e.target.value)
//     // });



//     const create = (e) => {
//         // e.preventDefault();//да не прзаревда страницата

//         // const formData = new FormData(e.curentTarget);

//         // const data = Object.fromEntries(formData)
//         // console.log(data);

//     }

//     return (
//         <section id="create-container">
//             <div className="create-container-info">

//                 <img src="/img/tools.jpg" alt="image" />

//                 <form onSubmit={onSubmitHandler} >

//                     <h2>Create Publication</h2>
//                     <p>Add your own masterpiece!</p>

//                     <label htmlFor="title">Title:</label>
//                     <input
//                         type="text"
//                         id="title"
//                         placeholder="Handmade spoone"
//                         name="title"
//                         value={formValues.title}
//                         onChange={onChangeHandler}
//                     // onChange={onTitleChange}
//                     />

//                     <label htmlFor="painting-tech">Description:</label>
//                     <input
//                         type="text"
//                         id="painting-tech"
//                         placeholder="Oil paints"
//                         name="description"
//                         value={formValues.description}
//                         onChange={onChangeHandler}
//                     />

//                     <label htmlFor="picture">Wood picture:</label>
//                     <input
//                         type="text"
//                         id="picture"
//                         placeholder="http://..."
//                         name="picture"
//                         value={formValues.picture}
//                         onChange={onChangeHandler}
//                     />

//                     <label htmlFor="certificate">Price:</label>
//                     <input
//                         type="text"
//                         id="certificate"
//                         name="price"
//                         value={formValues.price}
//                         onChange={onChangeHandler}
//                     />

//                     <label htmlFor="type">Type:</label>
//                     <select
//                         type="type"
//                         id="certificate"
//                         name="type"
//                         value={formValues.type}
//                         onChange={onChangeHandler}
//                     >
//                         <option value="spoons">Spoons</option>
//                         <option value="crockery">Crockery</option>
//                         <option value="sculptures">Sculptures</option>
//                         <option value="furnitures">Furnitures</option>
//                         <option value="toolboxes">Toolboxes</option>
//                         <option value="athers">Athers</option>
//                     </select>

//                     <button className="create-btn" type='submit' onClick={create}>Create</button>

//                 </form>

//             </div>
//         </section>

//     )
// }
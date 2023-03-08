
import '../css/create-edit.css'
import '../css/site.css'

import React, { useState } from 'react';

export default function Create({
    title,
    description,
    picture,
    price,
    type,
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

                <form onSubmit={onSubmitHandler} className="container-text">

                    <h2>Create Publication</h2>
                    <p>Add your own masterpiece!</p>

                    <label htmlFor="title">Title:</label>
                    <input 
                    type="text" 
                    id="title"
                     placeholder="Handmade product "
                     name="title"
                     value={formValues.title}
                     onChange={onChangeHandler}
                     />

                    <label htmlFor="painting-tech">Description:</label>
                    <input 
                    type="text"
                     id="painting-tech"
                     placeholder="Wood product..."
                     name="description"
                     value={formValues.description}
                     onChange={onChangeHandler}
                     />

                    <label htmlFor="picture">Wood picture:</label>
                    <input 
                    type="text"
                     id="picture" 
                    placeholder="http://..."
                     name="picture" 
                    value={formValues.picture} 
                    onChange={onChangeHandler}
                    />

                    <label htmlFor="certificate">Price:</label>
                    <input
                    type="text"
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

                    <button className="create-btn" type='submit' onClick={onCreate}>Create</button>

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
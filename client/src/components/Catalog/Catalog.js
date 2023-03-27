import '../Catalog/catalog.css'

import Publication from './Publication/Publication.js'

import React, { useContext, useReducer, useDispatch } from "react"
import { Link } from 'react-router-dom';
import { WoodContext } from '../../contexts/WoodContext.js'
import { productReducer } from '../../reducers/productReducer.js';


export default function Catalog() {
    const { products } = useContext(WoodContext)
    // console.log(products)
    //console.log(typeof products)

    // const initialState = {
    //     products: products,
    //     filteredProducts: products,
    //     selectedType: null
    //   };

    //  const [state, dispatch] = useReducer(productReducer, {});
  //  const dispatch = useDispatch
    function searchProducts(initialState) {
        dispatch({ type: "FILTER_PRODUCTS", payload: initialState });
    }

    // const products= [
    //       { id: 1, name: 'Product 1', type: 'Type A' },
    //       { id: 2, name: 'Product 2', type: 'Type B' },
    //       { id: 3, name: 'Product 3', type: 'Type A' },
    //       { id: 4, name: 'Product 4', type: 'Type C' },
    //       { id: 5, name: 'Product 5', type: 'Type B' },
    //     ]
    // const searchType='Type B';

    //const  dispatch ='Type B';




    // const [state, dispatch] = useReducer(productReducer, products);

    // function searchProducts( searchType) {
    //     dispatch({
    //         type: 'SEARCH_PRODUCTS',
    //         payload: searchType
    //     });

    //               console.log(searchType)
    //console.log(filteredProducts)
    //}

    // const filteredItems = products.filter(item => item.type === 'toolboxes');
    // console.log(filteredItems);
    return (

        < section id="gallery" >
            <h1>Wood World Gallery</h1>
            <article className="gallery-container">

                <button type="button" className="btn btn-outline-warning btn-custom" onClick={() => searchProducts("chairs")}>Chairs</button>
                <button type="button" className="btn btn-outline-warning btn-custom" onClick={() => searchProducts("ladles")}>Ladles</button>
                <button type="button" className="btn btn-outline-warning btn-custom" onClick={() => searchProducts("furnitures")}>Furnitures</button>
                <button type="button" className="btn btn-outline-warning btn-custom" onClick={() => searchProducts("toolboxes")}>Toolboxes</button>
                <button type="button" className="btn btn-outline-warning btn-custom" onClick={() => searchProducts("handtools")}>Handtools</button>
                <button type="button" className="btn btn-outline-warning btn-custom" onClick={() => searchProducts("other")}>Оther</button>
{/* 
                <ul>
                    {state.filteredProducts.map((product) => {
                        return (
                            <li key={product.id}>
                                {product.name} - {product.type}
                            </li>
                        );
                    })}
                </ul> */}

                <ul >
                    {products.length > 0
                        ? products.map(product =>
                            <li key={product._id}>

                                <Publication {...product} />

                            </li>)
                        :
                        <div className="no-events">
                            <p>This user has no products yet!</p>
                            <a href="/create" className="  btn btn-outline-warning btn-custom ">Create product</a>
                        </div>
                    }
                </ul>            </article >
        </section >
    )
}
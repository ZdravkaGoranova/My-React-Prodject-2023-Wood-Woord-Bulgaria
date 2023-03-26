import React from "react";
import '../gallery.css'

import { Link } from 'react-router-dom'

export default function Publication({
    _id,
    title,
    description,
    picture,
    price,
    type,
    isCompleted,
}) {
    return (


        <div className="card mb-3" >
            <img src={picture} className="card-img-top" alt={title}  style={{ maxWidth: '500px', maxHeight: '500px' }}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Type: {type}</p>

                <Link to={`/details/${_id}`}  className="btn btn-outline-warning btn-custom">Details</Link>
              
            </div>
        </div>

    

        // <article className="card-info">
        //     <article className="card-info-image">
        //         <img src={picture} alt={title} />
        //     </article>
        //     <article className="card-info-text">
        //         <h2>Title:  {title}</h2>

        //         <Link to={`/details/${_id}`}  className="details-btn">Details</Link>
        //     </article>
        // </article>
    )
}



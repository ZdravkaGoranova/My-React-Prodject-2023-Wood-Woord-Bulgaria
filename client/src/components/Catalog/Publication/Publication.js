import React from "react";
import '../catalog.css'

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

        <div className="card">
            <img src={picture} alt={title} className="card-img-bottom"  />
            <div className="card-body">
                <h5 className="card-title">Title:   {title}</h5>
                <p className="card-text">Type: {type}</p>
                <Link to={`/details/${_id}`}  className="details-btn">Details</Link>
            </div>
        </div>
    )
}


    // <article className="card-info">
        //     <article className="card-info-image">
        //         <img src={picture} alt={title} />
        //     </article>
        //     <article className="card-info-text">
        //         <h2>Title:  {title}</h2>

        //         <Link to={`/details/${_id}`}  className="details-btn">Details</Link>
        //     </article>
        // </article>
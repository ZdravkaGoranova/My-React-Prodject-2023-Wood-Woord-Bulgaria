import React from "react";
import '../gallery.css'

import { Link } from 'react-router-dom'

export default function Publication({
    _id,
    title,
    description,
    picture,
    price,
    isCompleted,
}) {
    return (
        <article className="card-info">
            <article className="card-info-image">
                <img src={picture} alt={title} />
            </article>
            <article className="card-info-text">
                <h2>Title:  {title}</h2>
                
                <Link to={`/details/${_id}`}  className="details-btn">Details</Link>
            </article>
        </article>
    )
}
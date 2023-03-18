import React from "react";
import '../Profile/profile.css'

import { Link } from 'react-router-dom'

export default function MyProducts({
    _id,
    title,
    description,
    picture,
    price,
    isCompleted,
}) {
    return (
        <div class="eventBoard">
            <div class="event-info">
                <img src={picture} />
                <h2>Title:  {title}</h2>

                <Link to={`/details/${_id}`} class="details-button">Details</Link>
            </div>
        </div>
    )
}
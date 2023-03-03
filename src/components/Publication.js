import React from "react";
import '../css/gallery.css'
import '../css/site.css'



export default function Publication({
    id, 
    title, 
    description, 
    picture, 
   
}) {
    return (
        <article class="card-info">
            <article class="card-info-image">
                <img src={picture} alt={title} />
            </article>
            <article class="card-info-text">
                <h2>Title: { title }</h2>
                <a href="/artGallerys/{{_id}}/details" class="details-btn">Details</a>
            </article>
        </article>

    )
}
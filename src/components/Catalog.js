import '../css/gallery.css'
import '../css/site.css'
import Publication from './Publication.js'

import React from "react";

export default function Catalog({
    data,
}) {
    return (

        <section id="gallery">
            <h1>Gallery</h1>
            <article class="gallery-container">

                {/* <!--If there are art publications in the database, show each of them--> */}

                {/* {{#if publications }}

            {{#each publications}}
            {{>publication}}
            {{/each}}
            {{else}} */}

                <Publication data={...data} />

                {/* <!--If there are still no art publications in the database display:--> */}
                <article class="no-available-publications">
                    <h1>No publications created yet.</h1>
                    <a href="/create" class="create-pub">Create publication</a>
                </article>
                {/* {{/if}} */}


            </article>
        </section>
    )
}
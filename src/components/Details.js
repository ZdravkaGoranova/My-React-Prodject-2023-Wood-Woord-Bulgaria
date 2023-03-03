import '../css/details.css'
import '../css/site.css'

export default function Details() {
    return (
        <section id="details-page">
            <h1>Details</h1>
            <article className="details-card">

                <article className="details-card-text">
                    <h2>Title:<br /> </h2>
                    {/* <h3>Author: </h3> */}
                    <h3>Description:</h3>
                    {/* <h3>Certificate of authenticity: </h3> */}

                    {/* <!-- If there is no registered user, do not display buttons--> */}
                    {/* {{#if isAuthenticated}} */}
                    <div className="buttons">
                        {/* <!-- Only for registered user and author of the publication --> */}
                        {/* {{#if isOwner}} */}
                        <a href="/artGallerys/{{publication._id}}/edit" className="btn-edit">Edit</a>
                        <a href="/artGallerys/{{publication._id}}/delete" className="btn-delete">Delete</a>
                        {/* {{else}}
                    {{#if isWished}} */}
                        {/* <!-- logged in user who has already shared the publication--> */}
                        <p className="shared-pub">You already shared this publication</p>
                        {/* ${isOwner == false && hasUser == true &&  hasLiked == 0  ? html`<a @click=${onLike} className="btn-like" href="#">Like</a>` : nothing} */}
                        {/* {{else}} */}
                        {/* <!-- logged in user who has not yet shared the publication--> */}
                        <a href="/artGallerys/{{publication._id}}/shared" className="btn-share">Share publication</a>
                        {/* ${isOwner == false && hasUser == true &&  hasLiked == 0  ? html`<a @click=${onLike} className="btn-like" href="#">Like</a>` : nothing} */}

                        <p className="likes">Likes: </p>

                        {/* {{/if}}
                    {{/if}}
                    {{/if}} */}
                    </div>

                </article>

                <article className="details-card-image">
                    <img src="{{publication.picture}}" alt="art-image2" />
                </article>

            </article>
        </section>

    )
}
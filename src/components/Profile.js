import '../css/profile.css'
import '../css/site.css'

export default function Profile() {
    return (
        <section id="profile-page">
        <h1>Full Profile Information</h1>
        <article className="profile-card">

            <article className="profile-card-info">
                <h2>Username: </h2>
                {/* <h3>Address: </h3> */}
                {/* {{#if myusersShared}} */}
                {/* <!--If the user has shared publications, separate their titles with a comma and a space (, )--> */}
                <h4>Titles of shared posts by the user: </h4>
                {/* <!--If not display:--> */}
                {/* {{else}} */}
                <h4>Titles of shared posts by the user: Not yet.</h4>
                {/* {{/if}}
                {{#if myPublications}} */}
                {/* <!--If the user has created their own publications, separate their titles with a comma and a space (, )--> */}
                <h4>Titles of which the user is the author: </h4>
                {/* <!--If not display:--> */}
                {/* {{else}} */}
                <h4>Titles of which the user is the author: Not yet.</h4>
                {/* {{/if}} */}

            </article>

            <article className="profile-card-icon">
                {/* <!-- Do not forget to change the path to the image --> */}
                <img src="/img/profile.jpg" alt="art-image1" />
            </article>

        </article>
    </section>
     
    )
}
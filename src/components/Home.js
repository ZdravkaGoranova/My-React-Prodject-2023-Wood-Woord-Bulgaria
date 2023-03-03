
import '../css/home.css'
import '../css/site.css'

export default function Home() {
    return (
        <>
            <nav>
{/* <!-- Do not forget to change the path to the image --> */}
<img src="/img/2.jpg" alt="logo" />
<a href="/">Wood World Bulgaria</a>

<ul class="menu">
    <li><a href="/catalog">Gallery</a></li>
    {/* <!-- Logged users -->
         {{#if isAuthenticated}} */}
    <li><a href="/create">Create Publication</a></li>
    <li><a href="/profile">Profile</a></li>
    <li><a href="/logout">Logout</a></li>
    {/* <!-- Guest users -->
         {{else}} */}
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
 {/* {{/if}} */}
</ul>

</nav>

{/* {{#if error}} */}

<div>
<div class="error-box">
    <p></p>
</div>
</div>

{/* {{/if}}

{{{body}}} */}
 <section id="home-page">
                <article className="auto-content">
                    {/* {{!-- <h1>Woor Woord Bulgaria</h1> --}} */}

                   </article>
                    </section>
                             <section id="home-page-content">                         <h1>Statistics of shared publication</h1>                         <article className="home-page-content-publications">
                                     {/* <!--If there are publications in the database, show the following view for each created publication--> */}                             {/* {{#each publicationData}} */}                             <article className="content-publication">                                 <h1>Title: </h1>
                                         {/* <!--If no one has shared the post yet, the number should be zero --> */}                                 <p>Number of people shared the publication:</p>                                 <a href="/artGallerys/{{_id}}/details" className="image-details">View publication</a>                             </article>
        
                                     {/* <!--If there are no publications yet, show:-->
                    {{else}} */}                             <article className="no-publication">                                 <h1>There are no publications yet.</h1>                                 <a href="/catalog" className="view-gallery">View Gallery</a>                             </article>                             {/* {{/each}} */}
                        </article>
                             </section> 
        </>
    )
}


//  {/* <section id="home-page">
//                 <article className="auto-content">
//                     {/* {{!-- <h1>Woor Woord Bulgaria</h1> --}} */}

//                     </article>
//                     </section>
        
//                     <section id="home-page-content">
//                         <h1>Statistics of shared publication</h1>
//                         <article className="home-page-content-publications">
        
//                             {/* <!--If there are publications in the database, show the following view for each created publication--> */}
//                             {/* {{#each publicationData}} */}
//                             <article className="content-publication">
//                                 <h1>Title: </h1>
        
//                                 {/* <!--If no one has shared the post yet, the number should be zero --> */}
//                                 <p>Number of people shared the publication:</p>
//                                 <a href="/artGallerys/{{_id}}/details" className="image-details">View publication</a>
//                             </article>
        
        
//                             {/* <!--If there are no publications yet, show:-->
//                     {{else}} */}
//                             <article className="no-publication">
//                                 <h1>There are no publications yet.</h1>
//                                 <a href="/catalog" className="view-gallery">View Gallery</a>
//                             </article>
//                             {/* {{/each}} */}
//                         </article>
        
//                     </section> */}
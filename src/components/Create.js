
 import '../css/create-edit.css'
 import '../css/site.css'


export default function Create() {
    return (
        <section id="create-container">
                <div className="create-container-info">
                 
                    <img src="/img/tools.jpg" alt="image" />

                    <form method="POST" className="container-text">

                        <h2>Create Publication</h2>
                        <p>Add your own masterpiece!</p>

                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" placeholder="Spring in the garden" name="title" value="" />

                        <label htmlFor="painting-tech">Description:</label>
                        <input type="text" id="painting-tech" placeholder="Oil paints" name="technique" value="" />

                        <label htmlFor="picture">Wood picture:</label>
                        <input type="text" id="picture" placeholder="http://..." name="picture" value="" />

                        {/* <label htmlFor="certificate">Certificate of authenticity:</label>
                        <input type="text" id="certificate" placeholder="Yes" name="certificate" value="" /> */}

                        <button className="create-btn">Create</button>

                    </form>

                </div>
            </section>
     
    )
}
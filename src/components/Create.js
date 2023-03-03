
 import '../css/create-edit.css'
 import '../css/site.css'


export default function Create({
    title,
    description,
    picture,
    price,
}) {


    const create = e => {
        e.preventDefault();

     
    }

    return (
        <section id="create-container">
                <div className="create-container-info">
                 
                    <img src="/img/tools.jpg" alt="image" />

                    <form method="POST" className="container-text">

                        <h2>Create Publication</h2>
                        <p>Add your own masterpiece!</p>

                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" placeholder="Spring in the garden" name="title" value={title} />

                        <label htmlFor="painting-tech">Description:</label>
                        <input type="text" id="painting-tech" placeholder="Oil paints" name="description" value={description} />

                        <label htmlFor="picture">Wood picture:</label>
                        <input type="text" id="picture" placeholder="http://..." name="picture" value={picture} />

                        <label htmlFor="certificate">Price:</label>
                        <input type="text" id="certificate" placeholder="Yes" name="price" value="" />

                        <button className="create-btn" type='submit' onClick={create}>Create</button>

                    </form>

                </div>
            </section>
     
    )
}
import '../create-edit.css'
import '../css/site.css'


export default function Edit({
    id,
    title,
    description,
    picture,
    price
}) {

    const onEdit = e => {
        e.preventDefault();


    };
    return (

        <section id="edit-container">
            <div class="edit-container-info">

                <img src="/static/img/logreg.jpg" alt="image" />

                <form method="POST" class="container-text">
                    <h2>Edit</h2>
                    <p>Edit your masterpiece!</p>

                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={title} />

                    <label htmlFor="painting-tech">Description:</label>
                    <input type="text" id="painting-tech" name="description" value={description} />

                    <label htmlFor="picture">Wood picture:</label>
                    <input type="text" id="picture" name="picture" value={picture} />

                    <label htmlFor="certificate">Price:</label>
                    <input type="text" id="certificate" placeholder="Yes" name="price" value={price} />

                    <button class="edit-btn" onClick={onEdit}>Edit</button>
                </form>

            </div>
        </section>
    )
}
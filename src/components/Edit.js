import '../create-edit.css'
import '../css/site.css'


export default function Edit() {
    return (
        
        <section id="edit-container">
        <div class="edit-container-info">
           
            <img src="/static/img/logreg.jpg" alt="image" />

            <form  method="POST" class="container-text">
                <h2>Edit</h2>
                <p>Edit your masterpiece!</p>

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value="{{book.title}}" />

                <label htmlFor="painting-tech">Painting technique:</label>
                <input type="text" id="painting-tech" name="technique" value="{{book.technique}}" />

                <label htmlFor="picture">Art picture:</label>
                <input type="text" id="picture" name="picture" value="{{book.picture}}" />

                <label htmlFor="certificate">Certificate of authenticity:</label>
                <input type="text" id="certificate" name="certificate" value="{{book.certificate}}" />

                <button class="edit-btn">Edit</button>
            </form>

        </div>
    </section>
    )
}
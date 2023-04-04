
import { useForm } from "../../../hooks/useForm.js";

export const AddComment = ({
    onCommentSubmit,

}) => {
    const { formValues, onChangeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">New comment</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>

                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Comment:</label>
                                <textarea class="form-control"  name="comment" value={formValues.comment} onChange={onChangeHandler} id="message-text" ></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={onSubmit}>Send comment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

  // <article className="create-comment">
        //     <label>Add new comment:</label>
        //     <form className="form" onSubmit={onSubmit}>
        //         {/* <input type="text" name="username" placeholder="Ivan" value={username} onChange={onUsernameChange}> </input> */}

        //         <textarea name="comment" placeholder="Comment......" value={formValues.comment} onChange={onChangeHandler}></textarea>
        //         <input className="btn btn-light btn-custom ml-3" type="submit" value='Add Comment'></input>
        //     </form>
        // </article>  

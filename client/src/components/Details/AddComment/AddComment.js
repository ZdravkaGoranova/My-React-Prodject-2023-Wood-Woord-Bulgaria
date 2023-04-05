
import { useForm } from "../../../hooks/useForm.js";

export const AddComment = ({
    onCommentSubmit,

}) => {
    const { formValues, onChangeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">New comment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>

                            <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label">Comment:</label>
                                <textarea className="form-control"  name="comment" value={formValues.comment} onChange={onChangeHandler} id="message-text" ></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={onSubmit}>Send comment</button>
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

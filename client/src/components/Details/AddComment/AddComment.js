import { useForm } from "../../../hooks/useForm.js";

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { formValues, onChangeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (

        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmit}>
                {/* <input type="text" name="username" placeholder="Ivan" value={username} onChange={onUsernameChange}> </input> */}

                <textarea name="comment" placeholder="Comment......" value={formValues.comment} onChange={onChangeHandler}></textarea>
                <input className="btn btn-outline-warning btn-custom" type="submit" value='Add Comment'></input>
            </form>

        </article>
    );
};


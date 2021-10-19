import { addComment } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function AddComment({ setComments }) {
  const { article_id } = useParams();
  const [newCommentTemp, setNewCommentTemp] = useState({});
  const [newComment, setNewComment] = useState({});
  useEffect(() => {
    if (newComment.body) {
      addComment(article_id, newComment)
        .then((res) => {
          console.log(res);
          setComments([]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [newComment]);

  function handleSubmit(e) {
    e.preventDefault();
    setNewComment(newCommentTemp);
  }

  return (
    <section>
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <div className="add-comment-form">
          <input
            id="author_input"
            placeholder="enter username"
            onChange={(e) => {
              setNewCommentTemp((currentCommentTemp) => {
                const newCommentTemp = { ...currentCommentTemp };
                newCommentTemp["author"] = e.target.value;
                return newCommentTemp;
              });
            }}
            required
          ></input>
          <textarea
            id="comment_input"
            placeholder="leave a comment"
            onChange={(e) => {
              setNewCommentTemp((currentCommentTemp) => {
                const newCommentTemp = { ...currentCommentTemp };
                newCommentTemp["body"] = e.target.value;
                return newCommentTemp;
              });
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
            required
          ></textarea>

          <button id="comment_submit" type="submit" hidden="true"></button>
        </div>
      </form>
    </section>
  );
}
export default AddComment;

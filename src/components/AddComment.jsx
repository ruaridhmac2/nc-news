import { addComment } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function AddComment({ comments, setComments }) {
  const { article_id } = useParams();
  const [newCommentTemp, setNewCommentTemp] = useState({});
  const [newComment, setNewComment] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setNewComment(newCommentTemp);

    if (newComment.body) {
      const commentsBefore = [...comments];
      setComments((currentComments) => {
        const newComments = [...currentComments];
        newComment["created_at"] = "now";
        newComments.unshift(newComment);
        return newComments;
      });

      addComment(article_id, newComment)
        .then((res) => {})
        .catch((err) => {
          setComments(commentsBefore);
        });
    }
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
        </div>
      </form>
    </section>
  );
}
export default AddComment;

import { getComments } from "../utils/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Comments({ comments, setComments }) {
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id)
      .then((res) => {
        setComments(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul className="comment-list">
      {comments.map((comment) => {
        return (
          <div key={comment.created_at + comment.author} className="comment">
            <p>{comment.author}</p>
            <p>{comment.created_at}</p>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </ul>
  );
}

export default Comments;

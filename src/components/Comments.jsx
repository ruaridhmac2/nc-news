import { getComments } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
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
    <section className="comment-list">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="comment">
              <p>{comment.author}</p>
              <p>{comment.created_at}</p>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;

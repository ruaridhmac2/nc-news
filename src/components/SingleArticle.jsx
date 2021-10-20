import { getSingleArticle } from "../utils/api";
import useArticleVote from "../hooks/useArticleVote.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleArticle() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  const { votes, setVotes, incVotes } = useArticleVote(article_id);
  const [voteDisplay, setVoteDisplay] = useState(0);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((res) => {
        setArticle(res);
        setVotes(res.votes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  return (
    <section className="single-article">
      <h2>{article.title}</h2>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      <p className="article-body">{article.body}</p>
      <button onClick={incVotes}>☑️ {votes}</button>
    </section>
  );
}

export default SingleArticle;

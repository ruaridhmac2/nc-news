import { getSingleArticle } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleArticle() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    console.log(article_id);
    getSingleArticle(article_id)
      .then((res) => {
        setArticle(res);
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
    </section>
  );
}

export default SingleArticle;

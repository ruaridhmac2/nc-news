import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
function Articles() {
  const [articles, setArticles] = useState([]);
  const { topic_slug } = useParams();
  useEffect(() => {
    getArticles(topic_slug)
      .then((res) => {
        console.log(res);
        setArticles(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic_slug]);
  return (
    <section className="article-list">
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <div key={article.article_id} className="article">
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
              <p>{article.author}</p>
              <p>{article.created_at}</p>
            </div>
          );
        })}
      </ul>
    </section>
  );
}

export default Articles;

import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";
import { useEffect, useState } from "react";
function Navbar() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics()
      .then((res) => {
        setTopics(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <nav className="nav-bar">
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/topics/${topic.slug}`}>
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;

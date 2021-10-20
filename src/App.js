import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Comments from "./components/Comments";
import SingleArticle from "./components/SingleArticle";
import AddComment from "./components/AddComment";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [comments, setComments] = useState([]);
  console.log("hello from app");
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1> NC News </h1>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <Articles />
          </Route>

          <Route exact path="/topics/:topic_slug">
            <Articles />
          </Route>

          <Route exact path="/articles/:article_id">
            <SingleArticle />
            <AddComment setComments={setComments} comments={comments} />
            <Comments setComments={setComments} comments={comments} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

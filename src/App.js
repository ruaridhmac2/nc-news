import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Comments from "./components/Comments";
import SingleArticle from "./components/SingleArticle";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> NC News </h1>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Articles />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/topics/:topic_slug">
            <Navbar />
            <Articles />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/articles/:article_id">
            <Navbar />
            <SingleArticle />
            <Comments />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

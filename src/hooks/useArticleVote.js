import { useEffect, useState } from "react";
import * as api from "../utils/api";

const useArticleVote = (articleId) => {
  const [votes, setVotes] = useState(0);
  console.log(votes);
  const incVotes = () => {
    setVotes((currentVotes) => {
      return currentVotes + 1;
    });
    api
      .incArticleVotes(articleId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setVotes((currentVotes) => {
          return currentVotes - 1;
        });
      });
  };
  return { votes, setVotes, incVotes };
};

export default useArticleVote;

import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://websters-gazette.herokuapp.com/api",
});
export const getArticles = async (topic_slug) => {
  let path = "/articles";
  const { data } = await newsApi.get(path, {
    params: { sort_by: "created_At", order: "desc", topic: topic_slug },
  });
  return data.articles;
};
export const getSingleArticle = async (article_id) => {
  let path = `/articles/${article_id}`;
  const { data } = await newsApi.get(path);
  return data.article;
};

export const getTopics = async () => {
  const { data } = await newsApi.get("/topics");
  return data.topics;
};

export const getComments = async (article_id) => {
  let path = `/articles/${article_id}/comments`;
  const { data } = await newsApi.get(path);
  return data.comments;
};

export const addComment = async (article_id, commentData) => {
  let path = `/articles/${article_id}/comments`;
  console.log(path);
  const { data } = await newsApi.post(path, {
    author: commentData.author,
    body: commentData.body,
  });
  return data.newComment;
};

export const incArticleVotes = async (article_id) => {
  let path = `/articles/${article_id}`;
  const { data } = await newsApi.patch(path, { inc_votes: 1 });
  return data.updatedArticle.votes;
};
export const getUser = async (username) => {
  let path = `/users/${username}`;
  const { data } = await newsApi.get(path);
  console.log(data.user);
  return data.user;
};

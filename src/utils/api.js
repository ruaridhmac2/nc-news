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

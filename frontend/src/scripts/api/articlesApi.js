import CONFIG from './configuration';

const ArticlesApi = {
  AllArticles: `${CONFIG.BASE_URL}/articles`,

  ArticleById: (id) => `${CONFIG.BASE_URL}/articles/${id}`,

  AddArticle: `${CONFIG.BASE_URL}/articles`,

  UpdateArticleById: (id) => `${CONFIG.BASE_URL}/articles/${id}`,

  DeleteArticleById: (id) => `${CONFIG.BASE_URL}/articles/${id}`,
};

export default ArticlesApi;

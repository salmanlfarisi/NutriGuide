const {
  addArticleHandler,
  getAllArticlesHandler,
  getArticleByIdHandler,
  updateArticleByIdHandler,
  deleteArticleByIdHandler,
} = require('../controllers');

const routes = [
  {
    method: 'POST',
    path: '/articles',
    handler: addArticleHandler,
  },
  {
    method: 'GET',
    path: '/articles',
    handler: getAllArticlesHandler,
  },
  {
    method: 'GET',
    path: '/articles/{articleId}',
    handler: getArticleByIdHandler,
  },
  {
    method: 'PUT',
    path: '/articles/{articleId}',
    handler: updateArticleByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/articles/{articleId}',
    handler: deleteArticleByIdHandler,
  },
];

module.exports = routes;

const Joi = require('joi');
const generateId = require('../utils/generateId');
const { readData, writeData } = require('../utils/dataStore');

const articlesCache = readData();

const articleSchema = Joi.object({
  category: Joi.string().required(),
  date: Joi.string().required(),
  title: Joi.string().required(),
  picture: Joi.string()
    .regex(/^(\/images\/[a-zA-Z0-9-_.]+)$/)
    .required(),
  headerText: Joi.string(),
  sectionSubtitle1: Joi.string(),
  sectionText1: Joi.string(),
  sectionSubtitle2: Joi.string(),
  sectionText2: Joi.string(),
  sectionSubtitle3: Joi.string(),
  sectionText3: Joi.string(),
  footerText: Joi.string(),
});

const addArticleHandler = (request, h) => {
  const { error, value } = articleSchema.validate(request.payload);
  if (error) {
    return h
      .response({
        status: 'fail',
        message: `Validation error: ${error.message}`,
      })
      .code(400);
  }

  const id = generateId();
  const newArticle = { id, ...value };

  articlesCache.push(newArticle);
  writeData(articlesCache);

  return h
    .response({
      status: 'success',
      message: 'Article successfully added.',
      data: {
        articleId: id,
      },
    })
    .code(201);
};

const getAllArticlesHandler = (request, h) => {
  const { category, title } = request.query;

  let filteredArticles = articlesCache;

  if (category) {
    filteredArticles = filteredArticles.filter(
      (article) => article.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (title) {
    filteredArticles = filteredArticles.filter((article) =>
      article.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  return h
    .response({
      status: 'success',
      data: {
        articles: filteredArticles.map(
          ({ id, category, date, title, picture }) => ({
            id,
            category,
            date,
            title,
            picture,
          })
        ),
      },
    })
    .code(200);
};

const getArticleByIdHandler = (request, h) => {
  const { articleId } = request.params;

  const article = articlesCache.find((a) => a.id === articleId);

  if (!article) {
    return h
      .response({
        status: 'fail',
        message: 'Article not found.',
      })
      .code(404);
  }

  return h
    .response({
      status: 'success',
      data: {
        article,
      },
    })
    .code(200);
};

const updateArticleByIdHandler = (request, h) => {
  const { articleId } = request.params;
  const { error, value } = articleSchema.validate(request.payload);

  if (error) {
    return h
      .response({
        status: 'fail',
        message: `Validation error: ${error.message}`,
      })
      .code(400);
  }

  const index = articlesCache.findIndex((a) => a.id === articleId);

  if (index === -1) {
    return h
      .response({
        status: 'fail',
        message: 'Failed to update article. ID not found.',
      })
      .code(404);
  }

  articlesCache[index] = {
    ...articlesCache[index],
    ...value,
  };

  writeData(articlesCache);

  return h
    .response({
      status: 'success',
      message: 'Article successfully updated.',
    })
    .code(200);
};

const deleteArticleByIdHandler = (request, h) => {
  const { articleId } = request.params;

  const index = articlesCache.findIndex((a) => a.id === articleId);

  if (index === -1) {
    return h
      .response({
        status: 'fail',
        message: 'Failed to delete article. ID not found.',
      })
      .code(404);
  }

  articlesCache.splice(index, 1);
  writeData(articlesCache);

  return h
    .response({
      status: 'success',
      message: 'Article successfully deleted.',
    })
    .code(200);
};

module.exports = {
  addArticleHandler,
  getAllArticlesHandler,
  getArticleByIdHandler,
  updateArticleByIdHandler,
  deleteArticleByIdHandler,
};

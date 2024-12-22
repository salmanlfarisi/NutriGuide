import ArticlesApi from './articlesApi';

class Endpoints {
  static async AllArticles() {
    try {
      const response = await fetch(ArticlesApi.AllArticles);
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error fetching all articles:', error);
      throw error;
    }
  }

  static async ArticleById(id) {
    try {
      const response = await fetch(ArticlesApi.ArticleById(id));
      if (!response.ok) {
        throw new Error(`Failed to fetch article with id: ${id}`);
      }
      return response.json();
    } catch (error) {
      console.error(`Error fetching article by ID ${id}:`, error);
      throw error;
    }
  }

  static async AddArticle(articleData) {
    try {
      const response = await fetch(ArticlesApi.AddArticle, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });

      if (!response.ok) {
        throw new Error('Failed to add article');
      }

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error adding article:', error);
      throw error;
    }
  }

  static async UpdateArticleById(id, articleData) {
    try {
      const response = await fetch(ArticlesApi.UpdateArticleById(id), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });

      if (!response.ok) {
        throw new Error(`Failed to update article with id: ${id}`);
      }

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(`Error updating article with ID ${id}:`, error);
      throw error;
    }
  }

  static async DeleteArticleById(id) {
    try {
      const response = await fetch(ArticlesApi.DeleteArticleById(id), {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete article with id: ${id}`);
      }

      return { message: 'Article deleted successfully' };
    } catch (error) {
      console.error(`Error deleting article with ID ${id}:`, error);
      throw error;
    }
  }
}

export default Endpoints;

import Endpoints from '../api/endpoints';

const ArticleDetails = {
  async render() {
    return `
      <section class="article-detail">
        <button id="back-button" class="back-button">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <div id="article-content" class="article-content">
          <p>Memuat artikel...</p>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const url = window.location.hash.split('/')[2];
    const articleContent = document.getElementById('article-content');
    const backButton = document.getElementById('back-button');

    backButton.addEventListener('click', () => {
      window.location.hash = '/articles';
    });

    try {
      const response = await Endpoints.ArticleById(url);

      if (!response.data || !response.data.article) {
        articleContent.innerHTML = '<p>Artikel tidak ditemukan.</p>';
        return;
      }

      const { article } = response.data;

      articleContent.innerHTML = `
        <h1 class="article-title">${article.title}</h1>
        <img class="article-image" src="${article.picture}" alt="${
  article.title
}">
        <p class="article-meta">${article.category} | ${new Date(
  article.date
).toLocaleDateString('id-ID')}</p>
        <p class="article-header">${article.headerText}</p>

        <h2 class="article-section-title">${article.sectionSubtitle1}</h2>
        <p class="article-section-text">${article.sectionText1}</p>

        <h2 class="article-section-title">${article.sectionSubtitle2}</h2>
        <p class="article-section-text">${article.sectionText2}</p>

        <h2 class="article-section-title">${article.sectionSubtitle3}</h2>
        <p class="article-section-text">${article.sectionText3}</p>

        <p class="article-footer">${article.footerText}</p>
      `;
    } catch (error) {
      console.error('Gagal memuat detail artikel:', error);
      articleContent.innerHTML =
        '<p>Gagal memuat artikel. Silakan coba lagi nanti.</p>';
    }
  },
};

export default ArticleDetails;

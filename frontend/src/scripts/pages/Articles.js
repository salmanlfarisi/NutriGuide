import Endpoints from '../api/endpoints';

const Articles = {
  async render() {
    return `
      <section class="hero-article">
        <div class="hero-content-article">
          <h1>NutriGuide</h1>
          <p>Temukan artikel pilihan dan jadikan hari Anda lebih bermakna!</p>
          <img src="./images/heroes/article-page.webp" alt="Hero Image"> 
        </div>
      </section>
      <section class="artikel-section">
        <h2>Artikel</h2>
        <div class="artikel-grid" id="artikel-grid"></div>
      </section>
    `;
  },

  async afterRender() {
    const artikelGrid = document.getElementById('artikel-grid');

    try {
      const response = await Endpoints.AllArticles();
      const articles = response.data.articles;

      if (!articles || articles.length === 0) {
        artikelGrid.innerHTML = '<p>Tidak ada artikel tersedia.</p>';
        return;
      }

      artikelGrid.innerHTML = articles
        .map((article) => this.createArticleCard(article))
        .join('');
    } catch (error) {
      console.error('Gagal memuat artikel:', error);
      artikelGrid.innerHTML =
        '<p>Gagal memuat artikel. Silakan coba lagi nanti.</p>';
    }
  },

  createArticleCard(article) {
    return `
      <a href="#/articles/${article.id}" class="artikel-link">
        <div class="artikel-card">
          <img src="${article.picture}" alt="${article.title}">
          <h3>${article.title}</h3>
          <p>${article.category} | ${new Date(article.date).toLocaleDateString(
  'id-ID'
)}</p>
        </div>
      </a>
    `;
  },
};

export default Articles;

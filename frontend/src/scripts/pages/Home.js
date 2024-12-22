import Endpoints from '../api/endpoints';

const Home = {
  async render() {
    return `
      <section class="hero-home">
        <div class="hero-content-home">
          <h1>
            Wujudkan Pola Hidup Sehat Mulai dari Sekarang dengan <span>NutriGuide</span>
          </h1>
          <p>
            <span>NutriGuide</span> hadir sebagai solusi modern untuk membantu Anda mengelola
            asupan nutrisi harian dengan mudah dan praktis. Bersama <span>NutriGuide</span>,
            wujudkan hidup sehat dan berkualitas mulai dari hari ini!
          </p>
          <img src="./images/heroes/home-page.webp" alt="Hero Image">
        </div>
      </section>
      <div class="check-nutrition">
        <h2>Cek Gizi</h2>
        <div class="nutrition-content">
          <div class="nutrition-text">
            <p>
              Yuk, <span>check gizi</span> kamu sekarang dan temukan informasi penting
              tentang kesehatan tubuhmu!
            </p>
            <button id="check-nutrition-btn" class="btn-check">Cek Gizi Sekarang!</button>
          </div>
          <img src="./images/features/home-check.webp" alt="Image Gizi">
        </div>
      </div>
      <section class="artikel-section">
        <h2>Artikel</h2>
        <div class="artikel-grid" id="artikel-grid"></div>
        <a href="#/articles" class="read-more-link">Selengkapnya ></a>
      </section>
    `;
  },

  async afterRender() {
    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');
    if (header) header.style.display = '';
    if (footer) footer.style.display = '';

    const checkNutritionButton = document.getElementById('check-nutrition-btn');
    if (checkNutritionButton) {
      checkNutritionButton.addEventListener('click', () => {
        window.location.hash = '#/check';
      });
    }

    try {
      const response = await Endpoints.AllArticles();
      const articles = response.data.articles.slice(0, 5);
      const artikelGrid = document.getElementById('artikel-grid');

      if (!articles || articles.length === 0) {
        artikelGrid.innerHTML = '<p>Tidak ada artikel tersedia.</p>';
        return;
      }

      artikelGrid.innerHTML = articles
        .map(
          (article) => `
          <a href="#/articles/${article.id}">
            <div class="artikel-card">
              <img src="${article.picture}" alt="${article.title}">
              <h3>${article.title}</h3>
              <p>${article.category} | ${new Date(
  article.date
).toLocaleDateString('id-ID')}</p>
            </div>
          </a>
        `
        )
        .join('');
    } catch (error) {
      console.error('Gagal memuat artikel:', error);
      const artikelGrid = document.getElementById('artikel-grid');
      artikelGrid.innerHTML = '<p>Gagal memuat artikel.</p>';
    }
  },
};

export default Home;

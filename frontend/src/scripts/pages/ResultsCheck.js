import Endpoints from '../api/endpoints';

const ResultsCheck = {
  async render() {
    const { name, bmi } = JSON.parse(sessionStorage.getItem('bmiResult'));
    let status = '';
    let imageSrc = '';

    if (bmi < 18.5) {
      status = 'Underweight';
      imageSrc = 'results-underweight.webp';
    } else if (bmi < 25) {
      status = 'Normal';
      imageSrc = 'results-normal.webp';
    } else if (bmi < 30) {
      status = 'Overweight';
      imageSrc = 'results-overweight.webp';
    } else {
      status = 'Obese';
      imageSrc = 'results-obese.webp';
    }

    return `
      <section id="bmi-result">
        <h2>Hasil Status Gizi untuk ${name}</h2>
        <div class="result-container">
          <p class="bmi-value">IMT: <span>${bmi}</span></p>
          <p class="bmi-status">Status: <span>${status}</span></p>
          <img src="../images/heroes/${imageSrc}" alt="${status}" class="bmi-image" />
        </div>
        <p class="bmi-description">
          ${this.getDescription(status)}
        </p>
        <section class="artikel-section">
          <h2>Artikel</h2>
          <div class="artikel-grid" id="artikel-grid"></div>
          <a href="#/articles" class="read-more-link">Selengkapnya ></a>
        </section>
      </section>
    `;
  },

  getDescription(status) {
    switch (status) {
    case 'Underweight':
      return 'Berat badan kamu kurang. Pastikan untuk mengonsumsi makanan bergizi dan berkonsultasi dengan ahli gizi.';
    case 'Normal':
      return 'Hasil status gizi kamu Normal. Ini artinya kondisi tubuhmu sudah sangat baik! Namun, jangan lengah tetap jaga pola makan seimbang dan perhatikan asupan gizimu agar kesehatan tubuh tetap optimal.';
    case 'Overweight':
      return 'Berat badan kamu berlebih. Kurangi konsumsi makanan tinggi lemak dan tingkatkan aktivitas fisik.';
    case 'Obese':
      return 'Berat badan kamu masuk kategori obesitas. Konsultasikan dengan ahli gizi untuk rencana penurunan berat badan.';
    default:
      return '';
    }
  },

  async afterRender() {
    try {
      const response = await Endpoints.AllArticles();
      const articles = response.data.articles.slice(0, 3);
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

export default ResultsCheck;

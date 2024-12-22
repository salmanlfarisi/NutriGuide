const Consultation = {
  async render() {
    return `
        <section class="consultation">
          <h1>Tanya Ahli Nutrisi Sekarang!</h1>
          <p>
            Punya pertanyaan tentang pola makan atau nutrisi? Hubungi ahli kami melalui WhatsApp
            untuk mendapatkan jawaban cepat dan terpercaya.
          </p>
          <div class="consultants">
            ${this.renderConsultantCard(
    './images/consultations/profile-2.webp',
    'Chika, S.Gz, M.P.H',
    'Senin - Jumat, 09.00 - 17.00 WIB'
  )}
            ${this.renderConsultantCard(
    './images/consultations/profile-1.webp',
    'Zayyan, S.Gz, M.Gz',
    'Senin - Jumat, 09.00 - 17.00 WIB'
  )}
            ${this.renderConsultantCard(
    './images/consultations/profile-3.webp',
    'Bella, S.Gz, M.Gz',
    'Senin - Jumat, 09.00 - 17.00 WIB'
  )}
          </div>
        </section>
        <section class="faq">
          <h2>FAQ</h2>
          <div class="faq-item">
            ${this.renderFaqItem(
    'Apakah ngemil di antara waktu makan itu sehat?',
    'Ngemil dapat sehat jika dilakukan dengan memilih makanan yang bernutrisi dan tidak berlebihan.'
  )}
          </div>
          <div class="faq-item">
            ${this.renderFaqItem(
    'Apa itu pola makan seimbang?',
    'Pola makan seimbang adalah konsumsi makanan dengan proporsi yang tepat dari semua kelompok makanan untuk memenuhi kebutuhan tubuh.'
  )}
          </div>
          <div class="faq-item">
            ${this.renderFaqItem(
    'Bagaimana cara menjaga berat badan ideal?',
    'Berat badan ideal dapat dijaga dengan mengatur pola makan sehat, rutin olahraga, dan cukup istirahat.'
  )}
          </div>
          <div class="faq-item">
            ${this.renderFaqItem(
    'Apakah benar harus makan 3 kali sehari agar nutrisi kita cukup?',
    'Tidak harus makan 3 kali sehari, tetapi penting untuk memastikan kebutuhan nutrisi harian terpenuhi.'
  )}
          </div>
          <div class="faq-item">
            ${this.renderFaqItem(
    'Berapa banyak air yang harus saya minum setiap hari?',
    'Kebutuhan air harian bervariasi tergantung pada usia, berat badan, aktivitas, dan lingkungan. Umumnya, dianjurkan minum sekitar 8 gelas (2 liter) per hari.'
  )}
          </div>
        </section>
    `;
  },

  renderConsultantCard(image, name, availability) {
    return `
      <a href="https://www.whatsapp.com/" target="_blank" class="consultant-card">
        <div>
          <img src="${image}" alt="${name}">
          <h3>${name}</h3>
          <p>Jam Konsultasi: ${availability}</p>
        </div>
      </a>
    `;
  },

  renderFaqItem(question, answer) {
    return `
      <button class="faq-question">
        ${question}
        <span class="toggle-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${answer}</p>
      </div>
    `;
  },

  async afterRender() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    if (faqQuestions) {
      faqQuestions.forEach((question) => {
        question.addEventListener('click', () => {
          question.classList.toggle('active');
          const answer = question.nextElementSibling;
          if (answer) {
            answer.style.display =
              answer.style.display === 'block' ? 'none' : 'block';
          }
        });
      });
    }

    console.log('Consultation Page rendered');
  },
};

export default Consultation;

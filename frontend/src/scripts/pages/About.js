const About = {
  async render() {
    return `
      <section class="hero-about">
        <div class="hero-content-about">
          <h1>NutriGuide</h1>
          <p>Your guide to a healthy living and balanced nutrition</p>
          <img src="./images/heroes/about-page.webp" alt="Hero Image">
        </div>
      </section>

      <section class="about-us">
        <div class="about-content">
          <h2>Tentang Kami</h2>
          <p>
            <span>NutriGuide</span> dirancang untuk membantu masyarakat mengelola pola makan sehat dan memenuhi kebutuhan gizi harian. 
            Dengan fitur pelacakan nutrisi, kalkulator gizi, konsultasi ahli, dan artikel kesehatan, <span>NutriGuide</span> menjadi solusi lengkap 
            untuk meningkatkan kesehatan dan kualitas hidup Anda.
          </p>
        </div>

        <div class="team-section">
          <h3>Our Team</h3>
          <div class="team-members">
            ${this.renderTeamMember(
    'Vian Haryadi',
    'Project Manager <br>Back-end Developer',
    './images/team/vian-haryadi.webp',
    'https://www.linkedin.com/in/vianharyadi/',
    'https://www.instagram.com/vian.hryd/',
    'https://github.com/relystrix-code'
  )}
            ${this.renderTeamMember(
    'Salman Alfarisi',
    'Front-end Developer <br>Back-end Developer',
    './images/team/salman-alfarisi.webp',
    'https://www.linkedin.com/in/salman-alfarisi-886630251/',
    'https://www.instagram.com/alfariss_24/',
    'https://github.com/salmanlfarisi'
  )}
            ${this.renderTeamMember(
    'Anindya Salsabila',
    'UI/UX Designer <br>Front-end Developer',
    './images/team/anindya-salsabila.webp',
    'https://www.linkedin.com/in/anindya-salsabila-putri-16b887291/',
    'https://www.instagram.com/anindysalsabila/',
    'https://github.com/anindyasalsa'
  )}
            ${this.renderTeamMember(
    'Paramesti Astagina',
    'UI/UX Designer <br>Front-end Developer',
    './images/team/paresmesti-astagina.webp',
    'https://www.linkedin.com/in/paramesti-astagina-a65b18291/',
    'https://www.instagram.com/astgnaaa_/',
    'https://github.com/ParamestiAstagina'
  )}
          </div>
        </div>
      </section>
    `;
  },

  renderTeamMember(name, role, imageUrl, linkedinUrl, instagramUrl, githubUrl) {
    return `
      <div class="team-member">
        <img src="${imageUrl}" alt="${name}">
        <h4>${name}</h4>
        <p>${role}</p>
        <div class="social-links">
          <a href="${linkedinUrl}" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="${instagramUrl}" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="${githubUrl}" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    `;
  },

  async afterRender() {
    console.log('About Page rendered');
  },
};

export default About;

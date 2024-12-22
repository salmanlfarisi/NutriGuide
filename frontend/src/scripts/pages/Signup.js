const Signup = {
  async render() {
    return `
      <div class="signup-wrapper">
        <section class="container-signup">
          <div class="left-section">
            <h1>Selamat Datang<br>di <span>NutriGuide!</span></h1>
            <img src="./images/heroes/signup-login.webp" alt="Signup Image">
          </div>
          <div class="right-section">
            <h2>Daftar</h2>
            <form id="signup-form">
              <div class="input-group">
                <input type="text" id="username" placeholder="Username" required>
              </div>
              <div class="input-group">
                <input type="email" id="email" placeholder="Email" required>
              </div>
              <div class="input-group">
                <input type="password" id="password" placeholder="Kata Sandi" required>
              </div>
              <div class="input-group">
                <input type="password" id="confirm-password" placeholder="Konfirmasi Kata Sandi" required>
              </div>
              <div class="input-group">
                <button class="button-signup" type="submit">Daftar</button>
              </div>
              <p class="login">Sudah punya akun? <a href="#" id="go-to-login">Masuk</a></p>
            </form>
          </div>
        </section>
      </div>
    `;
  },

  async afterRender() {
    console.log('Signup Page rendered');

    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');

    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';

    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (password !== confirmPassword) {
        alert('Kata sandi dan konfirmasi kata sandi tidak cocok!');
        return;
      }

      if (username && email && password && confirmPassword) {
        window.location.hash = '/home';
      } else {
        alert('Semua kolom harus diisi!');
      }
    });

    const goToLogin = document.getElementById('go-to-login');
    goToLogin.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.hash = '/login';
    });
  },
};

export default Signup;

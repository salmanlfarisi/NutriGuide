const Login = {
  async render() {
    return `
      <div class="login-wrapper">
        <section class="container-login">
          <div class="left-section">
            <h1>Selamat Datang<br>di <span>NutriGuide!</span></h1>
            <img src="./images/heroes/signup-login.webp" alt="Login Image">
          </div>
          <div class="right-section">
            <h2>Masuk</h2>
            <form id="login-form">
              <div class="input-group">
                <input type="email" id="email" placeholder="Email" required>
              </div>
              <div class="input-group">
                <input type="password" id="password" placeholder="Kata Sandi" required>
              </div>
              <button class="button-login" type="submit">Masuk</button>
              <p class="register">Belum punya akun? <a href="#">Daftar Sekarang</a></p>
            </form>
          </div>
        </section>
      </div>
    `;
  },

  async afterRender() {
    console.log('Login Page rendered');

    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (email && password) {
        window.location.hash = '/home';
      } else {
        alert('Email dan kata sandi harus diisi!');
      }
    });

    const registerLink = document.querySelector('.register a');
    registerLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.hash = '/signup';
    });
  },
};

export default Login;

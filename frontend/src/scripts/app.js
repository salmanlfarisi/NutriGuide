import DrawerInitiator from './utils/drawerInitiator';
import UrlParser from './routes/urlParser';
import routes from './routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initializeAppShell();
  }

  _initializeAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (page) {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } else {
      console.error(`The page for URL '${url}' was not found in the routes.`);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const profileBtn = document.getElementById('profile-btn');
  const profileContainer = document.querySelector('.app-bar__profile');
  const logoutLink = document.querySelector('#profile-dropdown a');

  profileBtn.addEventListener('click', (event) => {
    event.preventDefault();
    profileContainer.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!profileContainer.contains(event.target)) {
      profileContainer.classList.remove('active');
    }
  });

  logoutLink.addEventListener('click', () => {
    profileContainer.classList.remove('active');
  });
});

export default App;

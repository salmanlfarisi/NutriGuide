import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../sass/main.scss';
import '../sass/responsive.scss';
import App from './app';
import swRegister from './utils/swRegister';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#menu-button'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#main-content'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });

  const currentPath = window.location.hash;
  const navLinks = document.querySelectorAll('.app-bar__navigation ul li a');

  navLinks.forEach((link) => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  window.addEventListener('hashchange', () => {
    const updatedPath = window.location.hash;
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === updatedPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
});

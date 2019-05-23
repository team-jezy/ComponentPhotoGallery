import App from './components/app.js';

const app = new App();
const appDOM = app.render();

const root = document.getElementById('app');
root.appendChild(appDOM);

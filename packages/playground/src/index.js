import { App } from './App';

window.addEventListener('DOMContentLoaded', () => {
  const app = new App(document.querySelector('#app'));
  app.init();
});

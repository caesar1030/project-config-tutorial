import { App } from './App';
import './index.scss';

window.addEventListener('DOMContentLoaded', () => {
  const app = new App(document.querySelector('#app'));
  app.init();
});

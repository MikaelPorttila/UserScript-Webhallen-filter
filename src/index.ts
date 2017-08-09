import './index.scss';
import { App } from './app';

const app = new App();
window.addEventListener('load', () => app.init(), false);

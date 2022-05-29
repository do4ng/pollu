/* eslint-disable no-undef */
/* eslint-disable no-new-func */

import editMe from './components/edit-me.js';
import links from './components/links.js';
import main from './pages/main.js';

const { transform } = window.Pollu;
const app = {};

app.component = transform(editMe, { minify: true });
app.links = transform(links, { minify: true });
app.page = transform(main, { target: '#app', minify: true });

new Function(app.links.js)();
new Function(app.component.js)();
new Function(app.page.js)();

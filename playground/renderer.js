/* eslint-disable no-new-func */
import { transform as t } from '../dist/browser';

const app = {};

app.component = t(
  `
<app:define name="edit-me" />

<div>
  <p>edit <code>/playground/renderer.js</code></p>
</div>

<style>
  * {
    text-align: center;
  }
  code {padding: 0px 5px; font-family: Consolas,monospace;background-color: #f5f5f5;border-radius: 3px;color: #333;}
</style>
`,
  { minify: true }
);

app.page = t(
  `
<h1>
  pollu
</h1>

<edit-me />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
  html, body {
    font-family: 'Rubik', sans-serif;
    text-align: center;
  }
  
</style>
`,
  { target: '#app', minify: true }
);

new Function(app.component.js)();
new Function(app.page.js)();

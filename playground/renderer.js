/* eslint-disable no-undef */
/* eslint-disable no-new-func */

const t = window.Pollu.transform;

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
  code {margin: 0px 5px; padding: 2px; font-family: Consolas,monospace;background-color: #f5f5f5;border-radius: 3px;color: #333;}
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

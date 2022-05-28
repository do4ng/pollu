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

app.links = t(
  `
<app:define name="pollu-link" />

<div>
  <a href="https://github.com/kangdongmandoo/pollu">🐱 github</a>
  <a href="https://www.npmjs.com/package/pollu">🤖 download</a>
</div>

<style>
  * {
    text-align: center;
  }
  a {
    color: #333;
    padding: 5px;
  }
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
<pollu-link />

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

new Function(app.links.js)();
new Function(app.component.js)();
new Function(app.page.js)();

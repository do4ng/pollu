# 📜 Documents

## Installation

- using npm

```
$ npm install pollu
$ yarn add pollu
```

```js
import * as pollu from 'pollu';

console.log(pollu.transform);
```

- browser support

```html
<script src="https://unpkg.com/pollu/dist/browser.js" type="module"></script>

<script>
  console.log(window.Pollu.transform);
</script>
```

## Usage

### `transform()`

```js
const html = '<div>Hello, World!</div>';
const options = {
  target: '#app', // default: body
  minify: true, // default: false
};

transform(html, options);
/*
=> { js: '...', dev: '...' }
*/
```

### `<app:define>`

```js
eval(
  transform(`
<app:define name="hello-world" />
<p>Hello, World!</p>
`).js
);
```

```html
<hello-world></hello-world>
<!--Hello, World!-->
```

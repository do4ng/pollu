# pollu.js

[🐱 github](https://github.com/kangdongmandoo/pollu) [🤖 download](https://www.npmjs.com/package/pollu)

---

compile html to javascript code.  
You need only one of HTML file to render lots of data...

## Features

It uses `document.appendChild` instead of `document.write`  
[Difference between appendChild and document.write](https://stackoverflow.com/questions/22172589/document-write-vs-appendchild)

## Usage

```js
import { transform } from 'pollu';

writeFileSync('index.js', transform('<div>Hello World</div>').js);
```

```html
<script src="index.js"></script>
```

> output: Hello World

see example in [playground](https://github.com/kangdongmandoo/pollu/tree/main/playground)

## Browser-Support

```html
<script src="https://unpkg.com/pollu/dist/browser.js" type="module"></script>
```

```js
// check browser support
console.log(window.Pollu.transform);
```

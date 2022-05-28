# pollu.js

[🐱 github](https://github.com/kangdongmandoo/pollu) [🤖 download](https://www.npmjs.com/package/pollu)

---

compile html to javascript code.  
You need only one of HTML file to render lots of data...

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

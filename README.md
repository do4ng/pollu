# pollu.js

compile html to javascript code

```js
import { transform } from 'pollu';

writeFileSync('index.js', transform('<div>Hello World</div>').js);
```

```html
<script src="index.js"></script>
```

> output: Hello World

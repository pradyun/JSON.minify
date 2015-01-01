# JSON minify
Minify blocks of JSON-like content into valid JSON by removing all white-space *and* C/C++ style comments.

## Javascript implementation
This branch contains the JS implementation(s) of JSON minify. There are 3 implementations, one which uses regexp (`minify-sans-regexp.js`), 2 which don't (`minify.json.js` and `json.minify.js`).

`json.minify.js` is for the node package.

### Installation and Usage
To use in node via npm:
```sh
npm install node-json-minify
```

For in-browser use, you may download from the jsDelivr CDN:
```html
<script src='//cdn.jsdelivr.net/json-minify/latest/minify.json.min.js'></script>
```
or to use Kit's fork:
```html
<script src='//cdn.jsdelivr.net/json-minify/latest/minify-sans-regexp.min.js'></script>
```

Then use in code:
```js
JSON.minify = JSON.minify || require("node-json-minify");
var myjson = JSON.minify( '{ /* comment */ "foo": 42 \n }' ); // {"foo":42}
```

# JSON minify

Minify blocks of JSON-like content into valid JSON by removing all white-space *and* C/C++ style comments.

JSON parsers (like JavaScript's `JSON.parse()` parser) generally don't consider JSON with comments to be valid and parseable. So, the intended usage is of this project is to minify development-friendly JSON (i.e with comments) to valid JSON before parsing, such as:

```js
JSON.parse(JSON.minify(str))
```

Now you can maintain development-friendly JSON documents, where your source is formatted & commented, but minify them before parsing or before transmitting them over-the-wire.

As transmitting bloated (ie, with comments/white-space) JSON would be wasteful and silly, this JSON minify can also be used for server-side processing environments where you can strip comments/white-space from JSON before parsing a JSON document or before transmitting such over-the-wire from server to browser.

Though comments are not officially part of the JSON standard, [this][1] post from Douglas Crockford back in late 2005 helps explain the motivation behind this project.

> A JSON encoder MUST NOT output comments. A JSON decoder MAY accept and ignore comments.

Basically, comments are not in the JSON *generation* standard, but that doesn't mean that a parser can't be taught to ignore them. Which is exactly what JSON minify is for.

The first implementation of JSON minify was in JavaScript (as `JSON.minify`), but the intent is to port the implementation to as many other environments sand languages as possible/practical.

  [1]: http://tech.groups.yahoo.com/group/json/message/152

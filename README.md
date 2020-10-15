# BBC Visual Journalism Number Formatter

This module is used to format numbers correctly for BBC international services.

## How to use it at build time:

Install as a dev dependency:

```sh
npm i news-vj-number-formatter -D
```

Then use `require()` to pull it in:

```js
const numberFormatter = require('bbc-vj-number-formatter');

numberFormatter.format('bengali', 30.1);
````

## How to use it in your frontend code:

Install as a run-time dependency:

```sh
npm i bbc-vj-number-formatter
```

Then `import` it, if you need to format numbers at run-time, in the browser:

```js
import numberFormatter from 'bbc-vj-number-formatter/numberFormatter';

numberFormatter.format('bengali', 30.1);
````

## Running the tests:

```
npm run test
```

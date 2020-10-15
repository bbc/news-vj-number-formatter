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

numberFormatter.format('english', 1928074);
// 1,928,074

numberFormatter.format('bengali', 1928074);
// ১,৯২৮,০৭৪

numberFormatter.percentageFormat('arabic', 82.0);
// %82
````

## How to use it in your frontend code:

Install as a run-time dependency:

```sh
npm i bbc-vj-number-formatter
```

Then `import` it, if you need to format numbers at run-time, in the browser:

```js
import numberFormatter from 'bbc-vj-number-formatter/numberFormatter';

numberFormatter.format('english', 27.10);
// 27.1

numberFormatter.format('mundo', 27.10);
// 27,1

numberFormatter.percentageFormat('nepali', 82.0);
// ८२%
````

You can find more usage examples in `examples.js`

## Running the tests:

```
npm run test
```

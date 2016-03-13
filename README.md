# Pinyinizer

Adds proper (Mandarin) Chinese tone diacritics to a string.

The four tones of Chinese are commonly represented by the numbers 1-4. This module enables one to take a string with numerical tone representation and transforming it into a string with proper tone diacritics.

| Numeric | Tone Diacritic | Description |
| ------- | -------------- | ----------- |
| ma1     | mā             | level       |
| ma2     | má             | rising      |
| ma3     | mǎ             | dipping     |
| ma4     | mà             | falling     |
| ma      | ma             | neutral     |

## Installation

NPM:

```
npm install --save pinyinizer
```

Bower:

```
bower install --save pinyinizer
```

## API

### `pinyinize(s: string): string`

Returns a pinyinized string where all tone indicator numbers have been replaced with tone diacritics on the vowels.

## Usage

### NodeJS

```javascript
const pinyinizer = require('pinyinizer');

let pinyinized = pinyinizer.pinyinize('ni3hao3 shi4jie4!');

console.log(pinyinized) // nĭhăo shìjiè!
```

### Browser

In the browser, _pinyinizer_ is exposed as `Pinyinizer`:

```
var pinyinized = Pinyinizer.pinyinize('ni3hao3 shi4jie4!');

console.log(pinyinized) // nĭhăo shìjiè!
```
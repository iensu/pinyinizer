(function () {
  'use strict';

  var tonePtn = /([aeiouvü]{1,2}(n|ng|r|\'er|N|NG|R|\'ER){0,1}[1234])/gi;
  var suffixPtn = /(n|ng|r|\'er|N|NG|R|\'ER)$/;
  var toneMap = {
    a: ['ā', 'á', 'ǎ', 'à'],
    ai: ['āi', 'ái', 'ǎi', 'ài'],
    ao: ['āo', 'áo', 'ǎo', 'ào'],
    e: ['ē', 'é', 'ě', 'è'],
    ei: ['ēi', 'éi', 'ěi', 'èi'],
    i: ['ī', 'í', 'ǐ', 'ì'],
    ia: ['iā', 'iá', 'iǎ', 'ià'],
    ie: ['iē', 'ié', 'iě', 'iè'],
    io: ['iō', 'ió', 'iǒ', 'iò'],
    iu: ['iū', 'iú', 'iǔ', 'iù'],
    o: ['ō', 'ó', 'ǒ', 'ò'],
    ou: ['ōu', 'óu', 'ǒu', 'òu'],
    u: ['ū', 'ú', 'ǔ', 'ù'],
    ua: ['uā', 'uá', 'uǎ', 'uà'],
    ue: ['uē', 'ué', 'uě', 'uè'],
    ui: ['uī', 'uí', 'uǐ', 'uì'],
    uo: ['uō', 'uó', 'uǒ', 'uò'],
    v: ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
    ve: ['üē', 'üé', 'üě', 'üè'],
    ü: ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
    üe: ['üē', 'üé', 'üě', 'üè']
  };

  function getUpperCaseIndices(str) {
    var indices = [];
    for(var i = 0; i < str.length; i++) {
      if(str[i] === str[i].toUpperCase()) {
        indices.push(i);
      }
    }
    return indices;
  }

  function revertToUpperCase(str, indices) {
    var chars = str.split('');
    indices.map(function (idx) {
      chars[idx] = chars[idx].toUpperCase();
    });
    return chars.join('');
  }

  function parseCoda(coda) {
    var tone = parseInt(coda.slice(-1)) - 1;
    var vowel = coda.slice(0, -1);
    var suffix = vowel.match(suffixPtn);
    vowel = vowel.replace(suffixPtn, '');
    return {
      tone: tone,
      vowel: vowel.toLowerCase(),
      suffix: suffix && suffix[0],
      upperCaseIdxs: getUpperCaseIndices(vowel)
    };
  }

  function pinyinizeCoda(text, coda) {
    var parsedCoda = parseCoda(coda);
    var replacement = toneMap[parsedCoda.vowel][parsedCoda.tone];

    if (parsedCoda.suffix) {
      return text.replace(coda, revertToUpperCase(replacement + parsedCoda.suffix, parsedCoda.upperCaseIdxs));
    }

    return text.replace(coda, revertToUpperCase(replacement, parsedCoda.upperCaseIdxs));
  }

  var pinyinizer = {};

  pinyinizer.pinyinize = function (text) {
    var tones = text.match(tonePtn);

    if (!tones) {
      return text;
    }
    return tones.reduce(pinyinizeCoda, text);;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = pinyinizer;
  } else if (window) {
    window.WindowSlider = pinyinizer;
  } else {
    global.Pinyinizer = pinyinizer;
  }
})();

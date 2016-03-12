'use strict';

require('chai').should();

var pinyinizer = require('../index.js');

describe('Pinyinizer', function() {

  it('should turn "gao1" into "gāo"', function() {
    pinyinizer.pinyinize("gao1").should.equal("gāo");
  });

  it('should turn "ma1" into "mā"', function() {
    pinyinizer.pinyinize("ma1").should.equal("mā");
  });

  it('should turn "ma2" into "má"', function() {
    pinyinizer.pinyinize("ma2").should.equal("má");
  });

  it('should turn "mang2mang4" into "mángmàng"', function() {
    pinyinizer.pinyinize("mang2mang4").should.equal("mángmàng");
  });

  it('should turn "wo3 jiao4 yan1si1!" into "wǒ jiào yānsī!"', function() {
    pinyinizer.pinyinize("wo3 jiao4 yan1si1!").should.equal("wǒ jiào yānsī!");
  });

  it('should turn "Ma1ma" into "Māma"', function() {
    pinyinizer.pinyinize("Ma1ma").should.equal("Māma");
  });

  it('should turn "MA1MA" into "MĀMA"', function() {
    pinyinizer.pinyinize("MA1MA").should.equal("MĀMA");
  });

  it('should turn "MAN2" into "MÁN"', function() {
    pinyinizer.pinyinize("MAN2").should.equal("MÁN");
  });

  it('should turn "Ao2" into "Áo"', function() {
    pinyinizer.pinyinize("Ao2").should.equal("Áo");
  });

  it('should turn "aO2" into "áO"', function() {
    pinyinizer.pinyinize("aO2").should.equal("áO");
  });

  it('should turn "yAN1Si1" into "yĀNSī', function() {
    pinyinizer.pinyinize("yAN1Si1").should.equal("yĀNSī");
  });

  it('should turn "xie3" into "xiě"', function() {
    pinyinizer.pinyinize("xie3").should.equal("xiě");
  });

  it('should turn "xie3 dian3er shen2me ba" into "xiě diǎner shénme ba"', function() {
    pinyinizer.pinyinize("xie3 dian3er shen2me ba").should.equal("xiě diǎner shénme ba");
  });

  ['this little sentence should not be modified!', 'AKB48 akb48', 'odjoadqfofnoisdjafhoc8dw778 RT28EH39R9DASaD2 !!'].forEach(function (text) {
    it('should not modify inputs without tonemarkings: ' + text, function() {
      pinyinizer.pinyinize(text).should.equal(text);
    });
  });

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Base for constructing all permutations of pinyin syllables,
   * for testing purposes.
   *
   * Based on http://en.wikipedia.org/wiki/Pinyin_table
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  var pinyinData = {
    "codas": [
      ["i", "ī", "í", "ǐ", "ì"],
      ["a", "ā", "á", "ǎ", "à"],
      ["o", "ō", "ó", "ǒ", "ò"],
      ["e", "ē", "é", "ě", "è"],
      ["ai", "āi", "ái", "ǎi", "ài"],
      ["ei", "ēi", "éi", "ěi", "èi"],
      ["ao", "āo", "áo", "ǎo", "ào"],
      ["ou", "ōu", "óu", "ǒu", "òu"],
      ["an", "ān", "án", "ǎn", "àn"],
      ["en", "ēn", "én", "ěn", "èn"],
      ["ang", "āng", "áng", "ǎng", "àng"],
      ["eng", "ēng", "éng", "ěng", "èng"],
      ["ia", "iā", "iá", "iǎ", "ià"],
      ["ie", "iē", "ié", "iě", "iè"],
      ["iao", "iāo", "iáo", "iǎo", "iào"],
      ["iu", "iū", "iú", "iǔ", "iù"],
      ["ian", "iān", "ián", "iǎn", "iàn"],
      ["in", "īn", "ín", "ǐn", "ìn"],
      ["iang", "iāng", "iáng", "iǎng", "iàng"],
      ["ing", "īng", "íng", "ǐng", "ìng"],
      ["u", "ū", "ú", "ǔ", "ù"],
      ["ua", "uā", "uá", "uǎ", "uà"],
      ["uo", "uō", "uó", "uǒ", "uò"],
      ["uai", "uāi", "uái", "uǎi", "uài"],
      ["ui", "uī", "uí", "uǐ", "uì"],
      ["uan", "uān", "uán", "uǎn", "uàn"],
      ["un", "ūn", "ún", "ǔn", "ùn"],
      ["uang", "uāng", "uáng", "uǎng", "uàng"],
      ["ong", "ōng", "óng", "ǒng", "òng"],
      ["ü", "ǖ", "ǘ", "ǚ", "ǜ"],
      ["üe", "üē", "üé", "üě", "üè"],
      ["ün", "ǖn", "ǘn", "ǚn", "ǜn"],
      ["iong", "iōng", "ióng", "iǒng", "iòng"],

    ],
    "onsets": [
      "b", "p", "m", "f",
      "d", "t", "n", "l",
      "g", "k", "h",
      "j", "q", "x",
      "zh", "ch", "sh", "r",
      "z", "c", "s"
    ],
    "independentSyllables": [
      ["a", "ā", "á", "ǎ", "à"],
      ["o", "ō", "ó", "ǒ", "ò"],
      ["e", "ē", "é", "ě", "è"],
      ["ai", "āi", "ái", "ǎi", "ài"],
      ["ei", "ēi", "éi", "ěi", "èi"],
      ["ao", "āo", "áo", "ǎo", "ào"],
      ["ou", "ōu", "óu", "ǒu", "òu"],
      ["an", "ān", "án", "ǎn", "àn"],
      ["en", "ēn", "én", "ěn", "èn"],
      ["ang", "āng", "áng", "ǎng", "àng"],
      ["eng", "ēng", "éng", "ěng", "èng"],
      ["er", "ēr", "ér", "ěr", "èr"],
      ["yi", "yī", "yí", "yǐ", "yì"],
      ["ya", "yā", "yá", "yǎ", "yà"],
      ["yo", "yō", "yó", "yǒ", "yò"],
      ["ye", "yē", "yé", "yě", "yè"],
      ["yai", "yāi", "yái", "yǎi", "yài"],
      ["yao", "yāo", "yáo", "yǎo", "yào"],
      ["you", "yōu", "yóu", "yǒu", "yòu"],
      ["yan", "yān", "yán", "yǎn", "yàn"],
      ["yin", "yīn", "yín", "yǐn", "yìn"],
      ["yang", "yāng", "yáng", "yǎng", "yàng"],
      ["ying", "yīng", "yíng", "yǐng", "yìng"],
      ["wu", "wū", "wú", "wǔ", "wù"],
      ["wa", "wā", "wá", "wǎ", "wà"],
      ["wo", "wō", "wó", "wǒ", "wò"],
      ["wai", "wāi", "wái", "wǎi", "wài"],
      ["wei", "wēi", "wéi", "wěi", "wèi"],
      ["wan", "wān", "wán", "wǎn", "wàn"],
      ["wen", "wēn", "wén", "wěn", "wèn"],
      ["wang", "wāng", "wáng", "wǎng", "wàng"],
      ["weng", "wēng", "wéng", "wěng", "wèng"],
      ["yu", "yū", "yú", "yǔ", "yù"],
      ["yue", "yuē", "yué", "yuě", "yuè"],
      ["yuan", "yuān", "yuán", "yuǎn", "yuàn"],
      ["yun", "yūn", "yún", "yǔn", "yùn"],
      ["yong", "yōng", "yóng", "yǒng", "yòng"],
    ]
  };

  function permutate(onsets, codas) {
    var permutations = [];
    for(var onsetIdx = 0; onsetIdx < onsets.length; onsetIdx++) {
      for(var codaIdx = 0; codaIdx < codas.length; codaIdx++) {
        var syllables = [];
        for(var i = 0; i < codas[codaIdx].length; i++) {
          syllables.push(onsets[onsetIdx] + codas[codaIdx][i]);
        }
        permutations.push(syllables);
      }
    }
    return permutations;
  }

  pinyinData.independentSyllables.forEach(function (syllableRow) {

    var syllable = syllableRow[0];

    it('should NOT convert lowercase syllable without any tone markings: ' + syllable + ' -> ' + syllable, function () {
      pinyinizer.pinyinize(syllable).should.equal(syllable);
    });

    var SYLLABLE = syllable.toUpperCase();

    it('should NOT convert uppercase syllable without any tone markings: ' + SYLLABLE + ' -> ' + SYLLABLE, function () {
      pinyinizer.pinyinize(SYLLABLE).should.equal(SYLLABLE);
    });

    [1, 2, 3, 4].forEach(function (tone) {
      var input = syllableRow[0] + tone;
      var expected = syllableRow[tone];

      it('should convert lowercase syllable with tone markings correctly: ' + input + ' -> ' + expected, function () {
        pinyinizer.pinyinize(input).should.equal(expected);
      });

      var INPUT = input.toUpperCase();
      var EXPECTED = expected.toUpperCase();

      it('should convert uppercase syllable with tone markings correctly: ' + INPUT + ' -> ' + EXPECTED, function () {
        pinyinizer.pinyinize(INPUT).should.equal(EXPECTED);
      });
    });
  });

  permutate(pinyinData.onsets, pinyinData.codas).forEach(function (syllableRow) {
    var syllable = syllableRow[0];

    it('should NOT convert generated lowercase syllable without any tone markings: ' + syllable + ' -> ' + syllable, function () {
      pinyinizer.pinyinize(syllable).should.equal(syllable);
    });

    var SYLLABLE = syllable.toUpperCase();

    it('should NOT convert generated lowercase syllable without any tone markings: ' + SYLLABLE + ' -> ' + SYLLABLE, function () {
      pinyinizer.pinyinize(SYLLABLE).should.equal(SYLLABLE);
    });

    [1, 2, 3, 4].forEach(function (tone) {
      var input = syllableRow[0] + tone;
      var expected = syllableRow[tone];

      it('should convert lowercase syllable with tone markings correctly: ' + input + ' -> ' + expected, function () {
        pinyinizer.pinyinize(input).should.equal(expected);
      });

      var INPUT = input.toUpperCase();
      var EXPECTED = expected.toUpperCase();

      it('should convert uppercase syllable with tone markings correctly: ' + INPUT + ' -> ' + EXPECTED, function () {
        pinyinizer.pinyinize(INPUT).should.equal(EXPECTED);
      });
    });
  });
});

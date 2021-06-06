const word = 'Google';

var detectCapitalUse = function (word) {
  const checkCase = (str) => {
    if (str === str.toUpperCase()) {
      return 'UPPER';
    } else {
      return 'LOWER';
    }
  };

  let list = word.split('');
  let std = checkCase(list[0]);

  let upper = list.map((el) => el.toUpperCase());
  let lower = list.map((el) => el.toLowerCase());

  let marker = false;

  if (upper.join('') === word) return (marker = true);
  if (lower.join('') === word) return (marker = true);
  if (
    checkCase(word[0]) === 'UPPER' &&
    lower.join('').slice(1, lower.length) === word.slice(1, word.length)
  )
    return (marker = true);

  return marker;
};

let result = detectCapitalUse(word);
console.log(result);

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNumberSet = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  if (s.length === 1) {
    return romanNumberSet[s];
  }

  let result = 0;
  const specialNumber = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };
  for (let i = 0; i < s.length - 1; i++) {
    if (specialNumber[s[i] + s[i + 1]]) {
      result += specialNumber[s[i] + s[i + 1]];
      s = s.replace(s[i] + s[i + 1], '');
      i = -1;
    }
  }
  for (let j = 0; j < s.length; j++) {
    result += romanNumberSet[s[j]];
  }
  return console.log(result);
};

const s = 'IV';
romanToInt(s);

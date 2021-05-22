const ransomNote = 'fihjjjjei';
const magazine = 'hjibagacbhadfaefdjaeaebgi';

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const getSet = (list) => {
    let listSet = {};
    for (let i = 0; i < list.length; i++) {
      if (listSet[list[i]]) {
        listSet[list[i]]++;
      } else {
        listSet[list[i]] = 1;
      }
    }
    return listSet;
  };
  let r = ransomNote.split('');
  let m = magazine.split('');

  let rSet = getSet(r);
  let mSet = getSet(m);

  console.table(rSet);
  console.table(mSet);

  let t;
  for (const key in rSet) {
    t = mSet[key] >= rSet[key] ? true : false;
    if (!t) {
      return t;
    }
  }
  return t;
};

let result = canConstruct(ransomNote, magazine);
console.log(result);

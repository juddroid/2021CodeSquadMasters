const s = 'ab';
const t = 'a';

var isAnagram = function (s, t) {
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

  if (s.length !== t.length) return false;

  let sList = s.split('');
  let tList = t.split('');

  let sSet = getSet(sList);
  let tSet = getSet(tList);

  console.table(sSet);
  console.table(tSet);

  let standard = sSet.length > tSet.length ? sSet : tSet;

  let anagram;
  for (const key in standard) {
    anagram = sSet[key] === tSet[key] ? true : false;
    if (!anagram) {
      return anagram;
    }
  }
  return anagram;
};

let result = isAnagram(s, t);
console.log(result);

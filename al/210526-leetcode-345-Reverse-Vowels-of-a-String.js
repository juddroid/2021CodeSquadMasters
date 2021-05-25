const s = 'leetcode';

var reverseVowels = function (s) {
  let list = s.split('');
  console.log(list);
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let temp = [];

  for (let i = 0; i < list.length; i++) {
    if (vowels.includes(list[i])) {
      temp.push(list[i]);
      list[i] = 0;
    }
  }

  console.log(temp);
  let newTemp = temp;
  console.log(newTemp);

  let resultList = list.map((el, idx) => {
    if (el === 0) {
      return (el = newTemp.pop());
    }
    return el;
  });

  return resultList.join('');
};

let result = reverseVowels(s);
console.log(result);

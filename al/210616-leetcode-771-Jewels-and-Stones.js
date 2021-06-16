const jewels = 'aA';
const stones = 'aAAbbbb';

var numJewelsInStones = function (jewels, stones) {
  let jList = jewels.split('');
  let sList = stones.split('');
  let count = 0;
  for (let i = 0; i < jList.length; i++) {
    for (let j = 0; j < sList.length; j++) {
      if (jList[i] === sList[j]) count++;
    }
  }
  return count;
};
let result = numJewelsInStones(jewels, stones);
console.log(result);

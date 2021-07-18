// const clothes = [
//   ['yellowhat', 'headgear'],
//   ['bluesunglasses', 'eyewear'],
//   ['green_turban', 'headgear'],
// ];

const clothes = [
  ['crowmask', 'face'],
  ['bluesunglasses', 'face'],
  ['smoky_makeup', 'face'],
];

function solution(clothes) {
  let clothesSet = {};

  for (let i = 0; i < clothes.length; i++) {
    if (clothesSet[clothes[i][1]])
      clothesSet[clothes[i][1]].push(clothes[i][0]);
    else clothesSet[clothes[i][1]] = [clothes[i][0]];
  }

  let clothesLengthList = [];
  for (const key in clothesSet) {
    clothesLengthList.push(clothesSet[key].length);
  }

  let multi = clothesLengthList.reduce((acc, cur) => (acc *= cur + 1), 1);
  return multi - 1;
}

const result = solution(clothes);
console.log(result);

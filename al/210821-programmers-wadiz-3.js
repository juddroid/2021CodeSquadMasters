// const arr = [1, 2, 4, 8, 4, 2, 1];
// const arr = [1, 3, 5, 7, 6, 8, 9, 5, 1];
// const arr = [10, 0, 10, 0, 10, 0];
const arr = [5, 4, 5, 4, 5, 5];
// const arr = [4, 4, 4, 5];

function solution(arr) {
  // let count = 0;
  // let copy = [...arr];
  // const getMin = (list) => {
  //   let filter = list.filter((el) => el !== 0);
  //   let min = Math.min(...filter);
  //   return min;
  // };
  // const go = (list, min) => {
  //   list = list.map((el) => {
  //     if (el !== 0) {
  //       el = el - min;
  //     }
  //     return el;
  //   });
  //   return list;
  // };
  // const getZeroLen = (list) => list.filter((el) => el === 0).length;
  // while (getZeroLen(arr) !== arr.length) {
  //   let min = Math.min(...arr);
  //   min = min === 0 ? getMin(arr) : min;
  //   arr = go(arr, min);
  //   count++;
  // }
  // if (Array.from(new Set(copy)).length === 2) {
  //   let min = Math.min(...copy);
  //   if (min === 0) {
  //     return copy.filter((el) => el !== min).length;
  //   } else {
  //     return copy.filter((el) => el !== min).length;
  //   }
  // }

  let set = Array.from(new Set(arr));
  if (set.length === 2 && set.includes(0)) return set.length + 1;
  if (set.length === 2) return set.length + 2;

  return set.length;
}

const result = solution(arr);
console.log(result);

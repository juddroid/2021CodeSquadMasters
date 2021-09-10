console.time('timer');

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
function solution(a, b) {
  // let result = [];
  // for (let i = 0; i < a.length; i++) {
  //   if (b.includes(a[i])) {
  //     result.push(a[i]);
  //   }
  // }
  // return result.sort((a, b) => a - b);

  let result = [];
  let p1 = 0;
  let p2 = 0;
  let n = a.length;

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  while (p1 < n && p2 < n) {
    if (a[p1] === b[p2]) {
      result.push(a[p1]);
      p1++;
      p2++;
    } else if (a[p1] < b[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
  return result;
}

console.log(solution(a, b));
console.timeEnd('timer');

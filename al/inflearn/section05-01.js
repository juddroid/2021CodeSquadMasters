console.time('timer');

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
function solution(a, b) {
  // return a.concat(b).sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;
  let result = [];
  let n = a.length;
  let m = b.length;

  while (p1 < n && p2 < m) {
    if (a[p1] <= b[p2]) result.push(a[p1++]);
    else result.push(b[p2++]);
  }

  while (p1 < n) result.push(a[p1++]);
  while (p2 < m) result.push(b[p2++]);

  return result;
}

console.log(solution(a, b));
console.timeEnd('timer');

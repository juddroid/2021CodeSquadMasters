console.time('timer');
const dwarfs = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(dwarfs) {
  let sum = dwarfs.reduce((acc, cur) => (acc += cur), 0);
  let m, n;
  for (let i = 0; i < dwarfs.length; i++) {
    for (let j = i + 1; j < dwarfs.length; j++) {
      if (sum - (dwarfs[i] + dwarfs[j]) === 100) {
        m = dwarfs[i];
        n = dwarfs[j];
      }
    }
  }
  let mIdx = dwarfs.indexOf(m);
  dwarfs.splice(mIdx, 1);

  let nIdx = dwarfs.indexOf(n);
  dwarfs.splice(nIdx, 1);

  return dwarfs;
}

console.log(solution(dwarfs));
console.timeEnd('timer');

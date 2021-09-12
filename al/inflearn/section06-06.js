console.time('timer');

const N = 8;
const K = 3;

function solution(N, K) {
  let prince = Array(N)
    .fill(0)
    .map((el, idx) => idx + 1);

  let call = 1;
  while (prince.length > 1) {
    for (let i = 0; i < prince.length; i++) {
      if (call === K) {
        prince.shift();
        call = 1;
      } else {
        prince.push(prince.shift());
        call++;
      }
    }
  }
  return prince[0];
}

console.log(solution(N, K));
console.timeEnd('timer');

const N = 24;

function solution(N) {
  let factorList = [];

  for (let i = 0; i < Math.sqrt(N); i++) {
    if (N % (i + 1) === 0) {
      factorList.push(i + 1);
      factorList.push(N / (i + 1));
    }
  }

  let list = Array.from(new Set(factorList));

  return list.length;
}

let result = solution(N);
console.log(result);

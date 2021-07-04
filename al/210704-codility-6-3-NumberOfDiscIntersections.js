const A = [1, 5, 8, 7, 8, 4, 8, 5, 0, 5];

function solution(A) {
  let count = 0;
  let map = A.map((d, i) => [i - d, i + d]);
  let sorted = map.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i][1] >= sorted[j][0]) {
        count++;

        if (count > 10000000) return -1;
      } else {
        break;
      }
    }
  }

  return count;
}

let result = solution(A);
console.log(result);

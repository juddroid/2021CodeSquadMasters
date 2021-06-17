const A = [9, 3, 9, 3, 9, 7, 9];

function solution(A) {
  let dic = {};
  for (let i = 0; i < A.length; i++) {
    if (!dic[A[i]]) {
      dic[A[i]] = 1;
    } else {
      dic[A[i]]++;
    }
  }
  let odd = 0;
  for (const key in dic) {
    if (dic[key] % 2 !== 0) {
      odd = key;
    }
  }
  return +odd;
}

let result = solution(A);
console.log(result);

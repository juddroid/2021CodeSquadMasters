const N = 34879;

function solution(N) {
  let factorList = [];
  let current = N;

  if (N === 1) return 1;

  for (let i = 2; i < N; i++) {
    while (current % i === 0) {
      factorList.push(i);
      current = current / i;
    }
  }

  if (current !== 1) factorList.push(current);

  let dic = {};

  for (let i = 0; i < factorList.length; i++) {
    if (dic[factorList[i]]) dic[factorList[i]]++;
    else dic[factorList[i]] = 1;
  }

  if (Object.values(dic).length === 0) return 2;

  let result = Object.values(dic)
    .map((el) => el + 1)
    .reduce((acc, cur) => (acc *= cur), 1);

  return result;
}

let result = solution(N);
console.log(result);

const S = 'CAGCCTA';
const P = [2, 5, 0];
const Q = [4, 5, 6];

function solution(S, P, Q) {
  const getQuery = (str, start, end) => str.slice(start, end + 1);
  const getMin = (query) => {
    for (let i = 0; i < query.length; i++) {
      if (query.includes('A')) return 1;
      if (query.includes('C')) return 2;
      if (query.includes('G')) return 3;
      return 4;
    }
  };
  let result = [];
  let min = 0;
  for (let i = 0; i < P.length; i++) {
    query = getQuery(S, P[i], Q[i]);
    min = getMin(query);
    result.push(min);
  }
  return result;
}

let result = solution(S, P, Q);
console.log(result);

const A = [1, 2, 3];

function solution(A) {
  let sorted = A.sort((a, b) => a - b);
  let set = Array.from(new Set(sorted));
  console.log(set);
  let missing = 1;

  for (const i of set) {
    if (i === missing) {
      missing++;
    }
  }
  return missing;
}

let result = solution(A);
console.log(result);

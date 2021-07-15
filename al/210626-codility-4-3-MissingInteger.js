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

// function solution(A) {
//   let sorted = Array.from(new Set(A.sort((a, b) => a - b)));
//   let sort = sorted.filter((el) => el > 0);

//   if (sort.length === 0) return 1;
//   if (sort.length === 1 && sort[0] !== 1) return 1;

//   console.log(sort);

//   let cur = sort[0];

//   if (cur !== 1) return 1;

//   for (let i = 1; i < sort.length; i++) {
//     if (cur !== sort[i] - 1) return cur + 1;
//     else cur = sort[i];
//   }
//   return sort.length + 1;
// }

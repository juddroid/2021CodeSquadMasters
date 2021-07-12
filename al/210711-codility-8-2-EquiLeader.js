const A = [4, 3, 4, 4, 4, 2];

function solution(A) {
  let left = {};
  let right = {};

  left[A[0]] = 1;

  for (const key of A.slice(1, A.length)) {
    if (right[key]) {
      right[key]++;
    } else {
      right[key] = 1;
    }
  }

  console.table(left);
  console.table(right);

  let leader = 0;
  let max = A[0];

  for (let i = 1; i < A.length; i++) {
    if (left[max] > i / 2 && right[max] && right[max] > (A.length - i) / 2)
      leader++;
    else if (
      left[A[i - 1]] > i / 2 &&
      right[A[i - 1]] &&
      right[A[i - 1]] > (A.length - i) / 2
    ) {
      leader++;
      max = A[i - 1];
    }

    right[A[i]]--;

    if (left[A[i]]) left[A[i]]++;
    else left[A[i]] = 1;
  }

  return leader;
}

let result = solution(A);
console.log(result);

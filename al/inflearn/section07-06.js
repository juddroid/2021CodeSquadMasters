console.time('timer');

// const arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
const arr = [120, 130, 150, 150, 130, 150];

function solution(arr) {
  let result = [];
  let copy = [...arr];
  copy.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== copy[i]) {
      result.push(i + 1);
    }
  }
  return result.sort((a, b) => a - b);
}

let nums = console.log(solution(arr));
console.timeEnd('timer');

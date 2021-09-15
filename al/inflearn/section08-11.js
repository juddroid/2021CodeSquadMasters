console.time('timer');

const n = 2;
// const arr = [3, 6, 9];
const arr = [1, 2, 3, 4, 5];

function solution(n, arr) {
  let result = [];
  let ch = Array(arr.length).fill(0);
  let temp = Array(n).fill(0);
  const permutations = (i) => {
    if (i === n) {
      result.push([...temp]);
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (ch[j] === 0) {
          ch[j] = 1;
          temp[i] = arr[j];
          permutations(i + 1);
          ch[j] = 0;
        }
      }
    }
  };

  permutations(0);
  return result;
}

console.log(solution(n, arr));
console.timeEnd('timer');

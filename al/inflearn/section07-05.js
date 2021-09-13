console.time('timer');

const S = 5;
const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

function solution(arr) {
  // let queue = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (queue.length < S && !queue.includes(arr[i])) {
  //     queue.push(arr[i]);
  //   } else if (queue.length === 5) {
  //     queue.shift();
  //     queue.push(arr[i]);
  //   } else if (queue.includes(arr[i])) {
  //     queue.splice(queue.indexOf(arr[i]), 1);
  //     queue.push(arr[i]);
  //   }
  // }
  // return queue.reverse();
  let queue = Array(S).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let pos = -1;
    if (queue.includes(arr[i])) pos = queue.indexOf(arr[i]);
    if (pos === -1) {
      for (let j = S - 1; j >= 1; j--) {
        queue[j] = queue[j - 1];
      }
    } else {
      for (let j = pos; j >= 1; j--) {
        queue[j] = queue[j - 1];
      }
    }
    queue[0] = arr[i];
  }

  return queue;
}

let nums = console.log(solution(arr));
console.timeEnd('timer');

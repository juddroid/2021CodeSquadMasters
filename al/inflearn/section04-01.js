console.time('timer');

let nums = [128, 460, 603, 40, 521, 137, 123];

function solution(nums) {
  let temp = [];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = `${nums[i]}`.split('').reduce((acc, cur) => (acc += +cur), 0);

    if (sum >= max) {
      max = sum;
      temp.push(nums[i]);
    }
  }

  return Math.max(...temp);
}

console.log(solution(nums));
console.timeEnd('timer');

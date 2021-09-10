console.time('timer');

const nums = [130, 135, 148, 140, 145, 150, 150, 153];

function solution(nums) {
  let min = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > min) {
      min = nums[i];
      count++;
    }
  }
  return count;
}

console.log(solution(nums));
console.timeEnd('timer');

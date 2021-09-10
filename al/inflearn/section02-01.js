console.time('timer');

const nums = [7, 3, 9, 5, 6, 12];

function solution(nums) {
  let result = [];
  const bigger = (prev, next) => prev < next;
  result.push(nums[0]);
  for (let i = 0; i < nums.length - 1; i++) {
    if (bigger(nums[i], nums[i + 1])) result.push(nums[i + 1]);
  }
  return result;
}

console.log(solution(nums));
console.timeEnd('timer');

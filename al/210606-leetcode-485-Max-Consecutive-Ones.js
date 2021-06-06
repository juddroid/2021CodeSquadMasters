const nums = [1, 1, 0, 1, 1, 1];

var findMaxConsecutiveOnes = function (nums) {
  let maxList = [];
  let stack = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
    } else {
      maxList.push(count);
      count = 0;
    }
  }
  maxList.push(count);
  let max = maxList.sort((a, b) => b - a);
  return max[0];
};
let result = findMaxConsecutiveOnes(nums);
console.log(result);

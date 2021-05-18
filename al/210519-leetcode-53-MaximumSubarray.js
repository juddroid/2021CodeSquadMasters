const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
}

let result = maxSubArray(nums);
console.log(result);

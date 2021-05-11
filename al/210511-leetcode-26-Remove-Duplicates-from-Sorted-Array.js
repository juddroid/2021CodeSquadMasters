const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const nums = [1, 1, 2];

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let prev = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[prev] !== nums[i]) {
      prev++;
      nums[prev] = nums[i];
    }
    console.log(nums);
  }
  let result = prev + 1;
  console.log(result);
  return result;
}

removeDuplicates(nums);

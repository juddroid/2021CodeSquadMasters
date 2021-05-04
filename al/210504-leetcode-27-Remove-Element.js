/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (val == nums[i]) {
      nums.splice(i, 1);
      i = -1;
    }
  }
  return nums.length;
};

const nums = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(nums, val));

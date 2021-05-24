const nums = [0, 1];

var missingNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
  return nums.length;
};

let result = missingNumber(nums);
console.log(result);

// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const test = function () {
  const ex1_nums = [2, 7, 11, 15];
  const ex1_target = 9;
  const ex1_output = [0, 1];

  const ex2_nums = [3, 2, 4];
  const ex2_target = 6;
  const ex2_output = [1, 2];

  const ex3_nums = [3, 3];
  const ex3_target = 6;
  const ex3_output = [0, 1];

  const resultArr1 = twoSum(ex1_nums, ex1_target);
  const resultArr2 = twoSum(ex2_nums, ex2_target);
  const resultArr3 = twoSum(ex3_nums, ex3_target);

  function checkValue(result, expect) {
    let check = false;
    for (let i = 0; i < expect.length; i++) {
      if (expect[i] === result[i]) {
        check = true;
      } else {
        check = false;
      }
    }
    return check;
  }

  console.log(
    `result1: ${resultArr1}, case1: ${checkValue(resultArr1, ex1_output)}`
  );
  console.log(
    `result2: ${resultArr2}, case2: ${checkValue(resultArr2, ex2_output)}`
  );
  console.log(
    `result3: ${resultArr3}, case3: ${checkValue(resultArr3, ex3_output)}`
  );
};

var twoSum = function (nums, target) {
  let indexArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indexArray.push(i);
        indexArray.push(j);
      }
    }
  }
  return indexArray;
};

test();

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let numSet = nums.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur]++;
    }
    return acc;
  }, {});

  let max = Math.max(...Object.values(numSet));

  let result = 0;
  for (num in numSet) {
    if (numSet[num] === max) return (result = num);
  }
  return result;
};

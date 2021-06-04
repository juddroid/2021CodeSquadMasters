const nums = [1, 2, 3];

var findDisappearedNumbers = function (nums) {
  const one = Array.from(new Set(nums));
  const sorted = one.sort((a, b) => a - b);
  console.log(sorted);

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!sorted.includes(i + 1)) {
      result.push(i + 1);
    } else {
      continue;
    }
  }
  return result;
};

let result = findDisappearedNumbers(nums);
console.log(result);

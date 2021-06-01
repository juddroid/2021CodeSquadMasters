const nums = [1, 2];

var thirdMax = function (nums) {
  let list = Array.from(new Set(nums)).sort((a, b) => b - a);
  console.log(list);
  if (list.length === 2) return list[0];
  if (list.length === 1) return list[0];
  return list[2];
};

let result = thirdMax(nums);
console.log(result);

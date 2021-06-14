const nums = [1, 2, 3, 4];

var runningSum = function (nums) {
  let list = [];
  nums.reduce((acc, cur) => {
    acc += cur;
    list.push(acc);
    return acc;
  }, 0);

  return list;
};

let result = runningSum(nums);
console.log(result);

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;

var shuffle = function (nums, n) {
  let a = nums.slice(0, n);
  let b = nums.slice(n, nums.length);

  let ran = [];
  for (let i = 0; i < n; i++) {
    ran.push(a[i]);
    ran.push(b[i]);
  }
  return ran;
};

let result = shuffle(nums, n);
console.log(result);

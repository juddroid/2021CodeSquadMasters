const nums = [4, 1, 2, 1, 2];

function singleNumber(nums) {
  let a = 0;
  for (i of nums) {
    console.log('start', a, i);
    a ^= i;
    console.log('end', a, i);
  }
  return a;
}

let result = singleNumber(nums);
console.log(result);

let b = 10;
console.log((b ^= 1));

const nums = [1];
const target = 0;

function searchInsert(nums, target) {
  let insert = 0;

  if (nums.includes(target)) {
    insert = nums.indexOf(target);
    return insert;
  }
  nums.push(target);
  const list = nums.sort((a, b) => a - b);
  insert = list.indexOf(target);
  return insert;
}

let result = searchInsert(nums, target);
console.log(result);

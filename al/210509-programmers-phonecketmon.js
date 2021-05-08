const nums = [3, 3, 3, 2, 2, 2];

function solution(nums) {
  const pick = nums.length / 2;
  const newList = Array.from(new Set(nums));

  let result = 0;
  if (newList.length <= pick) {
    result = newList.length;
  } else {
    result = pick;
  }
  console.log(result);
  return result;
}

solution(nums);

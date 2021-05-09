const nums = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function solution(nums) {
  const scoreBoard = [];
  let currentMin = nums[0];
  let currentMax = nums[0];
  let minCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    let min = getMin(currentMin, nums[i]);
    let max = getMax(currentMax, nums[i]);
    scoreBoard.push({
      score: nums[i],
      min: min,
      max: max,
    });
    if (scoreBoard[i].min !== currentMin) minCount++;
    if (scoreBoard[i].max !== currentMax) maxCount++;
    debugger;
    currentMin = min;
    currentMax = max;
  }

  console.table(scoreBoard);
  let result = [maxCount, minCount];
  console.log(result);
  return result;
}

function getMin(min, num) {
  return min > num ? num : min;
}
function getMax(max, num) {
  return max < num ? num : max;
}

solution(nums);

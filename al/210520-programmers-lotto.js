// const lottos = [44, 1, 0, 0, 31, 25];
// const win_nums = [31, 10, 45, 1, 6, 19];

// const lottos = [0, 0, 0, 0, 0, 0];
// const win_nums = [38, 19, 20, 40, 15, 25];

const lottos = [45, 4, 35, 20, 3, 9];
const win_nums = [20, 9, 3, 45, 4, 35];

function solution(lottos, win_nums) {
  let win = {
    0: 6,
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
  };

  let count = 0;
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        count++;
      }
    }
  }
  console.log(count);

  let brother = lottos.filter((el) => el === 0).length;
  console.log(brother);

  let max = count + brother;
  let min = count;
  console.log(min, max);
  let result = [win[max], win[min]];

  return result;
}

console.log(solution(lottos, win_nums));

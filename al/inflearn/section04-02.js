console.time('timer');

let nums = [32, 55, 62, 20, 250, 370, 200, 30, 100];

function solution(nums) {
  let result = [];
  let reverse = nums.map((el) => {
    el = `${el}`.split('').reverse('').join('');
    return +el;
  });

  const isPrime = (num) => {
    let count = 0;
    if (num === 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    return count === 0;
  };

  for (let i = 0; i < reverse.length; i++) {
    if (isPrime(reverse[i])) {
      result.push(reverse[i]);
    }
  }
  return result;
}

console.log(solution(nums));
console.timeEnd('timer');

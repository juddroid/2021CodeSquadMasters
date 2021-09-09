// const day = 3;
// const cars = [25, 23, 11, 47, 53, 17, 33];
const day = 0;
const cars = [12, 20, 54, 30, 87, 91, 30];

function solution(day, cars) {
  return cars.filter((el) => +`${el}`.split('')[1] === day).length;
}

console.log(solution(day, cars));

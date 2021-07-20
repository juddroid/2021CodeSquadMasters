const priorities = [2, 1, 3, 2];
const location = 2;

function solution(priorities, location) {
  let result = 0;
  let count = 0;

  let doc = location;

  while (priorities.length > 0) {
    let current = priorities.shift();

    if (priorities.filter((el) => el > current).length > 0) {
      priorities.push(current);
    } else {
      count++;
      if (doc === 0) return (result = count);
    }
    doc--;

    if (doc === -1) {
      doc = priorities.length - 1;
    }
  }
  console.log(count);
  return result;
}

const result = solution(priorities, location);
console.log(result);

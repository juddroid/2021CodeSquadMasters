// const progresses1 = [93, 30, 55];
// const speed1 = [1, 30, 5];
// const return1 = [2, 1];
const progresses1 = [90, 90, 90, 90, 90];
const speed1 = [5, 5, 5, 5, 5];
const return1 = [5];

const progresses2 = [95, 90, 99, 99, 80, 99];
const speed2 = [1, 1, 1, 1, 1, 1];
const return2 = [1, 3, 2];

function solution(progresses, speeds) {
  let answer = [];
  let stack = [];
  let deployCount = 1;
  const newProgress = progresses.map((el, idx) => {
    const progress = Math.ceil((100 - el) / speeds[idx]);
    return progress;
  });
  console.log(newProgress);

  while (newProgress.length > 0) {
    const current = newProgress.shift();
    if (stack.length === 0) {
      stack.push(current);
    } else if (stack.length === 1) {
      if (stack[0] >= current) {
        deployCount++;
      } else {
        answer.push(deployCount);
        stack.pop();
        stack.push(current);
        deployCount = 1;
      }
    }
  }

  const complete = answer.reduce((acc, cur) => (acc += cur), 0);
  const extra = progresses.length - complete;
  if (extra !== 0) {
    answer.push(extra);
  }
  console.log(answer);
  return answer;
}

function test() {
  const result1 = solution(progresses1, speed1);
  const result2 = solution(progresses2, speed2);
  const isSameArray = (arr1, arr2) => {
    let checker = [];

    arr1.forEach((el, idx) => {
      if (el === arr2[idx]) {
        checker.push('check');
      }
    });
    return arr2.length === checker.length;
  };
  const testResult1 = isSameArray(result1, return1);
  const testResult2 = isSameArray(result2, return2);
  const printResult1 = {
    result1: result1,
    return1: return1,
    testResult1: testResult1,
  };
  const printResult2 = {
    result2: result2,
    return2: return2,
    testResult2: testResult2,
  };
  console.table(printResult1);
  console.table(printResult2);
}

test();

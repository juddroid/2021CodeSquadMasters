const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function conferenceRoom(num) {
  const length = +num.shift();

  const getStartTime = (time) => +time[0];
  const getFinishTime = (time) => +time[1];
  const isMax = (list, num) => Math.max(...list) === num;
  const getInitialTime = (list) => Math.min(...list);

  const startList = [];
  const finishList = [];
  num.forEach((el) => {
    const time = el.split(' ');
    startList.push(getStartTime(time));
    finishList.push(getFinishTime(time));
  });

  const initialTime = getInitialTime(startList);
  const bMax = isMax(finishList, finishList[10]);

  console.log(startList, finishList);
  console.log(initialTime, bMax);
}

conferenceRoom(input);

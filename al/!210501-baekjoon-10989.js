const fs = require('fs');

const input = fs.readFileSync('./test').toString().trim().split('\n');

function sortInside(num) {
  const list = new Int16Array(10000).fill(0);
  for (let i = 1; i < +num[0] + 1; i++) {
    list[num[i]]++;
  }

  list.reduce((acc, cur, i) => {
    acc += cur;
    list[i] = acc;
    return acc;
  }, 0);

  console.log(list);

  let checker = 0;
  for (let i = 0; i < list.length; i++) {}
}
sortInside(input);

console.time('timer');

const essential = 'CBA';
const classes = 'CBDAGE';
// const classes = 'CABDGE';

function solution(essential, classes) {
  // let check = '';
  // for (let i = 0; i < classes.length; i++) {
  //   if (essential.includes(classes[i])) {
  //     check += classes[i];
  //   }
  // }
  // return essential === check ? 'YES' : 'NO';

  let queue = essential.split('');

  for (let i = 0; i < classes.length; i++) {
    if (queue.includes(classes[i])) {
      if (queue.shift() !== classes[i]) return 'NO';
    }
  }

  return queue.length === 0 ? 'YES' : 'NO';
}

console.log(solution(essential, classes));
console.timeEnd('timer');

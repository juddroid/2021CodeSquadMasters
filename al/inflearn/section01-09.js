console.time('timer');
const word = 'BANANA';

function solution(word) {
  // let list = word.split('');
  // let newList = list.map((el) => {
  //   if (el === 'A') {
  //     el = '#';
  //   }
  //   return el;
  // });
  // return newList.join('');

  return word.replace(/A/g, '#');
}

console.log(solution(word));
console.timeEnd('timer');

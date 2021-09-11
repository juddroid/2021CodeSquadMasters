console.time('timer');

const str = '352+*9-';

function solution(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (isNaN(+str[i])) {
      let rt = stack.pop();
      let lt = stack.pop();
      if (str[i] === '+') {
        stack.push(lt + rt);
      } else if (str[i] === '-') {
        stack.push(lt - rt);
      } else if (str[i] === '*') {
        stack.push(lt * rt);
      } else if (str[i] === '/') {
        stack.push(lt / rt);
      }
    } else {
      stack.push(+str[i]);
    }
  }
  return stack.pop();
}

console.log(solution(str));
console.timeEnd('timer');

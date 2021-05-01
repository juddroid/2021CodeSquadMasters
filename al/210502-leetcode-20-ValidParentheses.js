/**
 * @param {string} s
 * @return {boolean}
 */
const s = '()';

var isValid = function (s) {
  let sList = s.split('');
  let stack = [];

  const change = (string) => {
    switch (string) {
      case ')':
        return (string = '(');
      case '}':
        return (string = '{');
      case ']':
        return (stirng = '[');
      default:
        break;
    }
    return string;
  };

  for (let i = 0; i < sList.length; i++) {
    if (sList[i] === '(' || sList[i] === '{' || sList[i] === '[') {
      stack.push(sList[i]);
    } else {
      if (change(sList[i]) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(sList[i]);
      }
    }
  }
  console.log(stack);
  return stack.length === 0 ? true : false;
};

console.log(isValid(s));

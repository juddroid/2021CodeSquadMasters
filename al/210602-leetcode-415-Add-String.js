const num1 = '11';
const num2 = '123';

var addStrings = function (num1, num2) {
  let num1List = num1.split('').reverse();
  let num2List = num2.split('').reverse();

  let stack = [];
  let result = [];

  let std = num1List.length > num2List.length ? num1List : num2List;

  for (let i = 0; i < std.length; i++) {
    let sum = (+num1List[i] || 0) + (+num2List[i] || 0) + (+stack[0] || 0);
    stack.pop();
    console.log(sum);
    if (sum < 10) {
      result.push(sum.toString());
    } else {
      result.push(sum.toString().split('')[1]);
      stack.push(sum.toString().split('')[0]);
    }
  }
  stack.length !== 0 && result.push(stack[0]);

  return result.reverse().join('');
};

let result = addStrings(num1, nums2);
console.log(result);

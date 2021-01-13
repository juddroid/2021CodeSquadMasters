// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
// then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

// Constraints:
// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */

const test = function () {
  const ex1_x = 123;
  const ex2_x = -123;
  const ex3_x = 120;
  const ex4_x = 0;

  const ex1_output = 321;
  const ex2_output = -321;
  const ex3_output = 21;
  const ex4_output = 0;

  const result1 = reverse(ex1_x);
  const result2 = reverse(ex2_x);
  const result3 = reverse(ex3_x);
  const result4 = reverse(ex4_x);

  console.log(`result1: ${result1}, case1: ${result1 === ex1_output}`);
  console.log(`result2: ${result2}, case2: ${result2 === ex2_output}`);
  console.log(`result3: ${result3}, case3: ${result3 === ex3_output}`);
  console.log(`result4: ${result4}, case3: ${result4 === ex4_output}`);
};

var reverse = function (x) {
  const tempReverse = (num) => {
    let reverseNum = null;
    if (num > 0) {
      reverseNum = Number(num.toString().split("").reverse().join(""));
    } else {
      reverseNum = Number(
        Math.abs(num).toString().split("").reverse().join("") * -1
      );
    }
    return reverseNum;
  };

  let bitRange = tempReverse(x);
  if (x === 0) {
    return x;
  }
  if (bitRange < (-2) ** 31 || bitRange > 2 ** 31 - 1) {
    return 0;
  }
  return bitRange;
};

test();

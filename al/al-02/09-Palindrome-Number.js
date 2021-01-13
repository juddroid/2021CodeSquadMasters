// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example,
// 121 is palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
//              herefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false

// Constraints:
// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {boolean}
 */

const test = function () {
  const ex1_x = 130031;
  const ex2_x = 1300031;
  const ex3_x = 10;
  const ex4_x = -101;

  const ex1_output = true;
  const ex2_output = true;
  const ex3_output = false;
  const ex4_output = false;

  const result1 = isPalindrome(ex1_x);
  const result2 = isPalindrome(ex2_x);
  const result3 = isPalindrome(ex3_x);
  const result4 = isPalindrome(ex4_x);

  function check(a, b) {
    return a === b;
  }

  let case1 = check(result1, ex1_output);
  let case2 = check(result2, ex2_output);
  let case3 = check(result3, ex3_output);
  let case4 = check(result4, ex4_output);

  console.log(`result1: ${result1}, case1: ${case1}`);
  console.log(`result2: ${result2}, case2: ${case2}`);
  console.log(`result3: ${result3}, case3: ${case3}`);
  console.log(`result4: ${result4}, case3: ${case4}`);
};

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let front = null;
  let back = null;
  let centerIdx = null;
  let string = x.toString();
  if (string.length % 2 === 0) {
    centerIdx = parseInt(string.length / 2);
    front = string.slice(0, centerIdx);
    back = string.slice(centerIdx, string.length).split("").reverse().join("");
  }
  if (string.length % 2 === 1) {
    centerIdx = parseInt(string.length / 2);
    front = string.slice(0, centerIdx);
    back = string
      .slice(centerIdx + 1, string.length)
      .split("")
      .reverse()
      .join("");
  }
  let check = front === back ? true : false;
  return check;
};

test();

// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */

const test = function () {
  const strs1 = ["flower", "flow", "flight"];
  // const strs2 = ["reflower", "flow", "flight"];
  const strs2 = ["dog", "racecar", "car"];

  const expected1 = "fl";
  const expected2 = "";

  const result1 = longestCommonPrefix(strs1);
  const result2 = longestCommonPrefix(strs2);

  console.log("------------------------------------------------------------");
  console.log("-------------------------   Test   -------------------------");
  console.log("------------------------------------------------------------");
  console.log(`             case1: ${result1 === expected1}, result1: ${result1}`);
  console.log("------------------------------------------------------------");
  console.log(`             case2: ${result2 === expected2}, result2: ${result2}`);
  console.log("------------------------------------------------------------");
};

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = [];
  let std = strs.sort((a, b) => a.length - b.length)[0];
  for (let i = 0; i < std.length + 1; i++) {
    for (let j = i + 1; j < std.length + 1; j++) {
      prefix.push(std.slice(i, j));
    }
  }
  let longest = [];

  for (let i = 0; i < prefix.length; i++) {
    let count = 0;
    for (let j = 0; j < strs.length; j++) {
      if (prefix[i] === strs[j].slice(0, i + 1)) {
        count++;
      }
    }
    if (count === strs.length) {
      longest.push(prefix[i]);
    }
  }

  let commonFix = longest.sort((a, b) => b.length - a.length)[0];
  if (commonFix === undefined) {
    return "";
  }
  return commonFix;
};

test();

console.log("a");

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

var intersection = function (nums1, nums2) {
  let temp = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      nums1[i] === nums2[j] && temp.push(nums1[i]);
    }
  }

  let result = Array.from(new Set(temp));
  console.log(result);
  return result;
};

let result = intersection(nums1, nums2);
console.log(result);

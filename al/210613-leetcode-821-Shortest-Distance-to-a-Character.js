const s = 'loveleetcode';
const c = 'e';
// const s = 'aaab';
// const c = 'b';

// var shortestToChar = function (s, c) {
//   let list = s.split('').map((el, idx) => (el === c ? idx : el));

//   let cList = [];
//   list.forEach((el) => {
//     typeof el === 'number' && cList.push(el);
//   });

//   let range = s.length;
//   let temp = [];
//   let result;
//   for (let i = 0; i < cList.length + 1; i++) {
//     if (i === 0) {
//       for (let j = 0; j <= cList[i]; j++) {
//         temp.push(cList[i] - j);
//       }
//     } else if (i > 0 && i < cList.length) {
//       let gap = cList[i] - cList[i - 1] - 1;
//       console.log(cList);
//       for (let j = cList[i]; j <= cList[i]; j++) {
//         console.log(gap);
//         if (gap === 1) {
//           temp.push(gap);
//         } else if (gap === 0) {
//           temp.push(0);
//           temp.push(0);
//         } else {
//           if (gap >= 2 && gap % 2 === 0) {
//             let sample = [];
//             let half = gap / 2;
//             for (let h = 0; h < half; h++) {
//               sample.push(h + 1);
//             }
//             let reverse = [...sample].reverse();

//             let gapList = sample.concat(reverse);

//             result = temp.concat(gapList);
//           } else {
//             let sample = [];
//             let half = Math.floor(gap / 2);
//             for (let h = 0; h < half; h++) {
//               sample.push(h + 1);
//             }
//             sample.push(half + 1);
//             let reverse = [...sample].reverse();
//             let gapList = sample.concat(reverse);
//             result = temp.concat(gapList);
//           }
//         }
//       }
//     } else if (i === cList.length) {
//       if (cList.length === 1 && cList[0] === range) return temp;

//       result.push(range - cList[i - 1] - 1);
//     }
//   }

//   return result;
// };

var shortestToChar = function (s, c) {
  const range = s.length;
  const ans = new Array(range);
  let prev = -Infinity;

  for (let i = 0; i < range; ++i) {
    if (s[i] === c) {
      prev = i;
    }
    ans[i] = i - prev;
  }

  prev = Infinity;
  for (let i = range - 1; i >= 0; --i) {
    if (s[i] === c) prev = i;
    ans[i] = Math.min(ans[i], prev - i);
  }

  return ans;
};

let result = shortestToChar(s, c);
console.log(result);

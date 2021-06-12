const matrix = [
  [7, 8],
  [1, 2],
];

const n = 4;

var luckyNumbers = function (matrix) {
  let lucky = [];
  const getRowMin = (list) => {
    return Math.min(...list);
  };
  const getIdx = (el, list) => {
    return list.indexOf(el);
  };

  for (let i = 0; i < matrix.length; i++) {
    let min = getRowMin(matrix[i]);
    let idx = getIdx(min, matrix[i]);
    let tempList = [];
    for (let j = 0; j < matrix.length; j++) {
      tempList.push(matrix[j][idx]);
    }

    let max = Math.max(...tempList);
    if (max === min) {
      lucky.push(max);
    }
  }
  return lucky;
};

let result = luckyNumbers(matrix);
console.log(result);

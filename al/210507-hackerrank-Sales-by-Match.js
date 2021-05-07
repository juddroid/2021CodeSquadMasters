const ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

function salesByMatch(input) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    if (Object.keys(result).includes(input[i].toString())) {
      result[input[i]] += 1;
    } else {
      result[input[i]] = 1;
    }
  }
  console.table(result);
  let temp = Object.values(result);
  let count = 0;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] % 2 === 0) {
      count += temp[i] / 2;
    } else {
      count += Math.floor(temp[i] / 2);
    }
  }
  console.log(count);
  return count;
}

salesByMatch(ar);

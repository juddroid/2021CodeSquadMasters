const brown = 8;
const yellow = 1;

function solution(brown, yellow) {
  let yellowList = [];

  for (let i = 1; i < yellow + 1; i++) {
    if (yellow % i === 0 && i <= yellow / i) {
      yellowList.push({ height: i, width: yellow / i });
    }
  }

  for (let i = 0; i < yellowList.length; i++) {
    if ((yellowList[i].width + 2 + yellowList[i].height) * 2 === brown) {
      return [yellowList[i].width + 2, yellowList[i].height + 2];
    }
  }
}

const result = solution(brown, yellow);
console.log(result);

// const answers = [1, 2, 3, 4, 5];
// const answers = [1, 3, 2, 4, 2];
const answers = [0, 0, 0, 0, 0];

// const expected = [1];
const expected = [1, 2, 3];

//================================================================

// 정답배열을 돌면서 수포자 정답과 맞춰보고,
// 맞으면 카운트
// 카운트 비교해서 정렬

function solution(answers) {
  const soopo1 = [1, 2, 3, 4, 5];
  const soopo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const soopo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const soopoSet = {};
  function checkAnswer(ans, soopo, studentNumber) {
    let count = 0;
    for (let i = 0; i < ans.length; i++) {
      if (ans[i] === soopo[i % soopo.length]) {
        count++;
      }
    }
    soopoSet[studentNumber] = count;
  }

  checkAnswer(answers, soopo1, 1);
  checkAnswer(answers, soopo2, 2);
  checkAnswer(answers, soopo3, 3);

  console.log(soopoSet);

  let checkedResult = Object.values(soopoSet).sort((a, b) => b - a);
  let topScore = [];
  topScore.push(checkedResult[0]);
  let topScoreStudent = [];
  for (let key in soopoSet) {
    if (soopoSet[key] === topScore[0]) {
      topScoreStudent.push(parseInt(key));
    }
  }
  var answer = topScoreStudent;
  return answer;
}

console.log(solution(answers));

const password = [
  [101, 1234],
  [102, 54321],
  [201, 202],
  [202, 1],
];
const s = '101#1234#102#654321#51#203#201#202#1#';

function solution(password, s) {
  let split = s.split('#').map((el) => +el);
  let count = 0;

  let dic = password.map((el, i) => {
    return {
      idx: i,
      ho: el[0],
      pa: el[1],
    };
  });

  let ho = dic.map((el) => el.ho);

  for (let i = 0; i < split.length; i++) {
    if (ho.includes(split[i])) {
      let idx = ho.indexOf(split[i]);

      if (dic[idx].pa === split[i + 1]) {
        count++;
        i++;
      }
    }
  }

  return count;
}

const result = solution(password, s);
console.log(result);

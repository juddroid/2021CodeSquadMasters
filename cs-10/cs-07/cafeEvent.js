// 주문 완료 요구사항
// 프로그램을 시작할 때 바리스타 인원수를 지정할 수 있도록 구현한다.
// 프로그램이 시작하면 바리스타가 몇 명인지 출력한다.
// 주문 담당자와 매니저는 각각 1명이라고 가정한다.
// 주문 담당자는 음료 주문을 받을 때마다 한꺼번에 주문한 고객을 구분해야 한다.
// 매니저는 바리스타가 보낸 음료 작업 완료 이벤트를 받아서 고객별로 주문 완성표를 업데이트한다.
// 바리스타가 3명 이상일 경우 담당하는 음료수를 분배하는 방식을 구현한다. 모든 바리스타가 모든 음료수를 만들지 않아야 한다.
// 바리스타 4명, 주문 고객 9명 + 음료 30개를 주문했다고 가정하고 동작을 확인한다.
// 현황판에는 주문한 고객별로 주문한 음료를 모두 구분해서 표시해야 한다.
// 고객이 주문한 모든 음료가 완성되면 각자 자기만의 방식으로 특별하게(?) 표시해서 출력한다.
// 모든 음료수를 만들고 나서 3초 동안 주문이 없으면 프로그램을 종료한다.
// 주문부터 제작 완료까지 이벤트 흐름을 그림으로 그려서, gist에 함께 첨부한다.

// 동작 예시
// > 바리스타는 총 2명입니다.
// > 메뉴  =  1. 아메리카노(3s)    2. 카페라떼(5s)    3. 프라프치노(10s)
// > 고객별로 주문할 음료 개수를 입력하세요. 예) A고객, 아메리카노 2개, 프라프치노 1개 => A, 1:2, 3:1
// > A, 1:2, 2:1
// /A1,A1,A2/
// 바리스타1-A아메리카노 시작
// /A1,A2/
// > B, 3:1, 2:1, 1:1
// /A1,A2,B3,B2,B1/
// 바리스타2-A아메리카노 시작
// /A2,B3,B2,B1/
// > C, 3:1, 1:1
// /A2,B3,B2,B1,C3,C1/
// 바리스타1-A카페라떼 시작
// /B3,B2,B1,C3,C1/
// .
// 바리스타1-A아메리카노 완성
// 바리스타1-B프라프치노 시작
// /B2,B1,C3,C1/
// 바리스타2-B카페라떼 시작
// /B1,C3,C1/
// ..
// 바리스타2-A카페라떼 완성
// 바리스타2-B아메리카노 시작
// /C3,C1/
// .
// 바리스타1-A아메리카노 완성
// ===== A, 아메리카노*2, 카페라떼 주문 완성
// .
// 바리스타1-C프라프치노 시작
// /C1/
// .
// 바리스타1-B아메리카노 완성
// 바리스타2-B카페라떼 완성
// .
// 바리스타2-C아메리카노 시작
// //
// ..
// 바리스타2-C아메리카노 완성
// .......
// 바리스타1-B프라프치노 완성
// ===== B, 아메리카노, 카페라떼, 프라프치노 주문 완성
// .
// 바리스타2-C프라프치노 완성
// ===== C, 아메리카노, 프라프치노 주문 완성
// >

// 모든 메뉴가 완성되었습니다.

// ======================== emoji , chalk ===========================
let emoji = require('node-emoji');
let chalk = require('chalk');
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;
let w = chalk.white;
// ==================================================================
// =========================== readline =============================
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `ORDER: `,
});

rl.on('line', (line) => {
  let inputCMD = line.split(' ');
  console.log(inputCMD);
  if (inputCMD[0] === 'q') {
    console.log('finish');
    rl.close();
  }
});
// ==================================================================

const EMOJI = {
  AMERICANO: `${emoji.get('coffee')} Americano`,
  LATTE: `${emoji.get('horse')} CaffeLatte`,
  FRAPP: `${emoji.get('popcorn')} Frappuccino`,
};
const MENU = {
  1: {
    menu: EMOJI.AMERICANO,
    sec: 3,
  },
  2: {
    menu: EMOJI.LATTE,
    sec: 5,
  },
  3: {
    menu: EMOJI.FRAPP,
    sec: 10,
  },
};

console.table(MENU);
rl.prompt();

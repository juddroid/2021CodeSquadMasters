const rs = require('readline-sync');
const chalks = require('./chalks');
const query = require('./query');
const print = require('./print');
const db = require('./db');

const printLog = (print) => {
  console.log(print);
};

printLog(print.init);
printLog(print.empty);
const start = async () => {
  let emptyList = await db.execute(query.getPC());
  printLog(emptyList);
  if (emptyList.length === 0) {
    console.log(`> 현재 사용할 수 있는 자리가 없습니다.\n> 줄을 서세요.`);
  }
  const input = rs.question(`${chalks.y('\nRACCOON PC >>> ')}`).split(' ');

  switch (input[0]) {
    case 'new':
      await updatePC(emptyList[0], 1);
      break;
    case 'stop':
      await stopPC(input[1], 0);
      break;
    case 'history':
      await printHistory();
      break;
    case 'q':
      await printLog(print.end);
      break;
  }
  if (input[0] === 'q') {
    return;
  }

  start();
};
start();

const updatePC = async (pc_no, status) => {
  await db.update(query.updateState(pc_no, status));
  await db.update(query.insertHistory(pc_no));
  let userKey = await db.update(query.getUser(pc_no));
  console.log(`${pc_no}번 자리에 앉으세요 : #${userKey[0].user}`);
};

const stopPC = async (user, status) => {
  await db.update(query.updateHistory(user));
  let pcNum = await db.update(query.getPC_NUM(user));
  await db.update(query.endPC(pcNum[0].pc_no, status));
  console.log(`이제 ${pcNum[0].pc_no}번 자리가 비었습니다.`);
};

const printHistory = async () => {
  let history = await db.update(query.getHistory());
  console.table(history);
};

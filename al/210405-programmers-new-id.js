const new_id1 = '...!@BaT#*..y.abcdefghijklm';
const result1 = 'bat.y.abcdefghi';

const new_id2 = 'z-+.^.';
const result2 = 'z--';

const new_id3 = '=.=';
const result3 = 'aaa';

const new_id4 = '123_.def';
const result4 = '123_.def';

const new_id5 = 'abcdefghijklmn.p';
const result5 = 'abcdefghijklmn';

const possibleStirngSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '.', '_', '-'];
function changeLowerCase(id) {
  return id.toLowerCase();
}

function removeUselessString(id) {
  const idList = id.split('');
  const newIdList = [];
  idList.forEach((el) => {
    if (possibleStirngSet.includes(el) || !isNaN(Number(el))) {
      newIdList.push(el);
    }
  });
  return newIdList.join('');
}

function removeLinearDot(id) {
  const idList = id.split('');
  const newList = [];
  const stack = [];
  while (idList.length > 0) {
    const current = idList.shift();

    if (current === '.' && !stack.includes('.')) {
      stack.push(current);
      newList.push(current);
    } else if (current === '.' && stack.includes('.')) {
      continue;
    } else {
      stack.pop();
      newList.push(current);
    }
  }
  return newList.join('');
}

function removeEdgeDot(id) {
  const idList = id.split('');
  if (idList[0] === '.') idList.shift();
  if (idList[idList.length - 1] === '.') idList.pop();
  return idList.join('');
}

function isEmptyString(id) {
  return id === '';
}

function checkEmpty(id) {
  if (isEmptyString(id)) {
    id = 'a';
  }
  return id;
}

function isLong(list, length) {
  return list.length >= length;
}

function checkLongString(id, length) {
  const idList = id.split('');
  if (isLong(idList, length)) {
    const semiResult = idList.splice(0, length);
    if (semiResult[semiResult.length - 1] === '.') {
      semiResult.pop();
      return semiResult.join('');
    }
    return semiResult.join('');
  }
  return id;
}

function isShort(list, length) {
  return list.length <= length;
}

function checkShortString(id, length) {
  const idList = id.split('');
  if (isShort(idList, length)) {
    while (isShort(idList, length)) {
      idList.push(idList[idList.length - 1]);
    }
    return idList.join('');
  }
  return idList.join('');
}

function solution(new_id) {
  const lowerCase = changeLowerCase(new_id);
  const filterString = removeUselessString(lowerCase);
  const mergeDotString = removeLinearDot(filterString);
  const newID = removeEdgeDot(mergeDotString);
  const checkEmptyID = checkEmpty(newID);
  const checkLongID = checkLongString(checkEmptyID, 15);
  const checkShortID = checkShortString(checkLongID, 2);
  return checkShortID;
}

function test() {
  console.log(solution(new_id1) === result1);
  console.log(solution(new_id2) === result2);
  console.log(solution(new_id3) === result3);
  console.log(solution(new_id4) === result4);
  console.log(solution(new_id5) === result5);
}

test();

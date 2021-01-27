// const s = '07:05:45PM';
// const ex = '19:05:45';
const s = '04:59:59AM';
const ex = '04:59:59';

function timeConversion(s) {
  let splitString = s.split('');
  let AP = splitString[splitString.length - 2];
  let HOUR = Number(splitString.slice(0, 2).join(''));

  let cutArr = splitString.slice(2, splitString.length - 2);

  if (AP === 'A') {
    if (HOUR < 12) {
    } else {
      HOUR -= 12;
    }
  } else if (AP === 'P') {
    HOUR += 12;
    if (HOUR === 24) {
      HOUR = 12;
    }
  }
  let zero = ['0'];
  let absHOUR = Math.abs(HOUR);

  let arrHOUR = absHOUR.toString().split('');

  if (arrHOUR.length === 1) {
    arrHOUR = zero.concat(absHOUR);
  }

  let result = arrHOUR.concat(cutArr).join('');

  return result;
}

function test(s, ex) {
  let result = timeConversion(s);
  console.log(`result: ${result}, ex: ${ex}`);
  return console.log(result === ex);
}

test(s, ex);

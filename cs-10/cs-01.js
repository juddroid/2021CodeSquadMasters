// Mission1: 이진 덧셈기


function halfadder(bitA, bitB) {
  function sum(a, b) {
    if ((!a && !b)||(a&b)) return false;
    if ((!a && b)||(a&&!b)) return true;
  }
  
  function carry(a, b) {
    if(a && b) return true;
    return false
  }
  
  let answer = [carry(bitA, bitB), sum(bitA, bitB)];
  return answer;
}

function fulladder(bitA, bitB, carry) {
  let answer = [];
  return answer;
}

console.log(halfadder(false, false))
console.log(halfadder(false, true))
console.log(halfadder(true, false))
console.log(halfadder(true, true))
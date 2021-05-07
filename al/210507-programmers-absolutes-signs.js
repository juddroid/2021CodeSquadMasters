function solution(absolutes, signs) {
  const newList = absolutes.map((el, idx) => {
    if (signs[idx]) {
      el = +el;
    } else {
      el = -el;
    }
    return el;
  });

  const answer = newList.reduce((acc, cur) => (acc += cur), 0);
  return answer;
}

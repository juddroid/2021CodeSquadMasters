const citations = [22, 42];

function solution(citations) {
  if (citations[0] === 0 && citations.length === 1) return 0;
  if (citations.length === 1) return 1;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) return i;
  }

  return citations.length;
}

const result = solution(citations);
console.log(result);

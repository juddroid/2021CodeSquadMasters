const example = {
  participant: {
    1: ["leo", "kiki", "eden"],
    2: ["marina", "josipa", "nikola", "vinko", "filipa"],
    3: ["mislav", "stanko", "mislav", "ana"],
  },
  completion: {
    1: ["eden", "kiki"],
    2: ["josipa", "filipa", "marina", "nikola"],
    3: ["stanko", "ana", "mislav"],
  },
  return: {
    1: "leo",
    2: "vinko",
    3: "mislav",
  },
};

function solution (participant, completion) {
participant.sort();
completion.sort();

let result = '';
for (let i = 0; i < participant.length; i++) {
  if(participant[i] !== completion[i]) {
    return result = participant[i]
  }
}
console.log(result)
  return result
}

function test () {
  const result1 = solution(example.participant[1], example.completion[1]) === example.return[1]
  const result2 = solution(example.participant[2], example.completion[2]) === example.return[2]
  const result3 = solution(example.participant[3], example.completion[3]) === example.return[3]
  const result = { result1, result2, result3}
  return result
}

console.log(test())
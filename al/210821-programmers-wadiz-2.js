const code = [
  'a=3',
  '..a=4',
  '..b=3',
  '..print a',
  '.......a=6',
  '.......print a',
  '.......print b',
  '..print a',
  '....a=7',
  '....print a',
  'print a',
  'print b',
  'a=4',
  'print a',
  '...print a',
];

function solution(code) {
  const getBlock = (c) => {
    let split = c.split('.');
    return { block: split.length - 1, v: split[split.length - 1] };
  };
  const getNameValue = (v) => {
    if (v.includes('=')) {
      let split = v.split('=');
      return { name: split[0], value: split[1] };
    } else {
      let split = v.split(' ');
      return { command: split[0], name: split[1] };
    }
  };

  let nameSet = [];
  let result = [];

  for (let i = 0; i < code.length; i++) {
    let block = getBlock(code[i]);
    if (block.v.includes('=')) {
      let value = getNameValue(block.v);
      let temp = {};
      temp.block = block.block;
      temp.name = value.name;
      temp.value = value.value;
      nameSet.push(temp);
    } else {
      let c = getBlock(code[i]);
      let command = getNameValue(c.v);
      command.block = c.block;

      let list = nameSet.filter((el) => {
        return el.name === command.name && el.block <= command.block;
      });
      if (list.length === 0) {
        result.push('error');
      } else {
        result.push(
          list[list.length - 1].name + '=' + list[list.length - 1].value
        );
      }
    }
  }
  return result;
}

const result = solution(code);
console.log(result);

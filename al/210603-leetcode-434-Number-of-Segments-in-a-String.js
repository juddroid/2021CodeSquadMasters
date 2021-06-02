const s = '                ';

var countSegments = function (s) {
  if (s === ``) return 0;

  let list = s.split(' ');
  let result = list.filter((el) => el !== '');

  return result.length;
};

let result = countSegments(s);
console.log(result);

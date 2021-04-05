// console.log('c');

function go(...fns) {
  console.dir(fns);
  fns.reduce(function (acc, cur) {
    return cur(acc);
  });
}

// go(
//   0,
//   (a) => a + 1,
//   (a) => a * 10,
//   console.log
// );

function pipe(...fns) {
  return function (arg) {
    console.log(`arg: ${arg}`);
    fns.reduce(function (acc, cur) {
      cur(acc);
    }, arg);
  };
}

pipe = (...funcs) => (argument) => funcs.reduce((acc, func) => func(acc), argument);

const p = pipe(
  (a) => a + 1,
  (a) => a * 10
);

console.log(p(0));
console.dir(p);

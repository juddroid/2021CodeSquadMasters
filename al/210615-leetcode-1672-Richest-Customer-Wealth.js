const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

var maximumWealth = function (accounts) {
  let money = [];
  for (let i = 0; i < accounts.length; i++) {
    let temp = accounts[i].reduce((acc, cur) => (acc += cur), 0);

    money.push(temp);
  }

  return Math.max(...money);
};

let result = maximumWealth(accounts);
console.log(result);

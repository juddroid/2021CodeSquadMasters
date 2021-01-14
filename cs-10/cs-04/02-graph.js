let chalk = require("chalk");
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;

const GRAPH_RANGE = 25;
function graphArr() {
  let arr = [];
  for (let i = 0; i < GRAPH_RANGE; i++) {
    let temp = [];
    for (let j = 0; j < GRAPH_RANGE; j++) {
      temp.push("");
    }
    arr.push(temp);
  }
  return arr;
}

let graph24 = graphArr();

// y
function axisY(arr) {
  for (let i = 0; i < GRAPH_RANGE; i++) {
    if (i === GRAPH_RANGE) {
      arr[i][1] = "";
    }
    arr[i][1] = "|";
  }
  return arr;
}

// x

function axisX(arr) {
  let rows = "";
  for (let i = 0; i < GRAPH_RANGE; i++) {
    arr[23][i] = "___";
    rows += arr[23][i];
  }
  return arr;
}

// x: number
function numAxisX(arr) {
  let xNum = "";
  for (let i = 0; i < GRAPH_RANGE; i++) {
    if (i === 0) {
      xNum += "0";
    } else if (i % 2 === 0) {
      if (i.toString().length === 1) {
        xNum += `0${i}`;
      } else {
        xNum += i;
      }
    } else {
      xNum += "    ";
    }
  }
  return arr;
}

// +
graph24[23][1] = "+";

function draw(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`arr[${i}][${j}]: ${arr[i][j]}`);
    }
  }
}

// draw(graph24);

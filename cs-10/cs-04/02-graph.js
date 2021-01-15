let chalk = require("chalk");
let y = chalk.yellow;

const GRAPH_RANGE = 26;
function graphArr() {
  let arr = [];
  for (let i = 0; i < GRAPH_RANGE + 1; i++) {
    let temp = [];
    for (let j = 0; j < GRAPH_RANGE + 1; j++) {
      temp.push("   ");
    }
    arr.push(temp);
  }
  return arr;
}

// x

function axisX(arr) {
  let rows = "";
  for (let i = 0; i < GRAPH_RANGE + 1; i++) {
    arr[GRAPH_RANGE - 1][i] = "---";
    rows += arr[GRAPH_RANGE - 1][i];
  }
}

// x: number
function numAxisX(arr) {
  let temp = "";
  for (let i = 2; i < GRAPH_RANGE; i += 2) {
    if (i === 2) {
      temp += ` ${i}`;
    } else if (i.toString().length === 1) {
      temp += `     ${i}`;
    } else {
      temp += `    ${i}`;
    }
  }
  arr[GRAPH_RANGE][2] = temp;
  for (let i = 3; i < arr.length; i++) {
    arr[GRAPH_RANGE][i] = "";
  }
}

// y
function axisY(arr) {
  for (let i = 0; i < GRAPH_RANGE; i++) {
    arr[i][1] = "| ";
  }
}

// y: number
function numAxisY(arr) {
  let yNum = 24;
  for (let i = 0; i < arr.length; i++) {
    if ((yNum - i) % 2 === 0) {
      arr[i][0] = `  `;
    } else {
      arr[i][0] = `${yNum}`;
      if (yNum.toString().length === 1) {
        arr[i][0] = ` ${yNum}`;
      }
      yNum -= 2;
    }
    arr[GRAPH_RANGE - 1][0] = "  ";
  }
  arr[GRAPH_RANGE][0] = "";
  arr[GRAPH_RANGE][1] = "  0    ";
  arr[GRAPH_RANGE - 1][1] = "+ ";
}

// white space
function whiteSpace(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i][arr.length] = "";
  }
}

// draw point
function drawPoint(arr, x, y) {
  if (y === 0) {
    arr[GRAPH_RANGE - x - 1][y + 1] = "* ";
  } else {
    arr[GRAPH_RANGE - x - 1][y + 1] = " * ";
  }
  return arr;
}

function print(arr) {
  let graph = "";
  for (let i = 0; i < arr.length; i++) {
    let temp = "";
    for (let j = 0; j < arr.length; j++) {
      temp += arr[i][j];
    }
    console.log(y(`${temp}`));
  }
  return graph;
}

function drawGraph() {
  let graph24 = graphArr();
  axisX(graph24);
  numAxisX(graph24);
  axisY(graph24);
  numAxisY(graph24);
  whiteSpace(graph24);
  return graph24;
}

module.exports = { drawGraph, drawPoint, print };

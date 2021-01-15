const { Point, Line, Area } = require("./01-shape-class");
const { drawGraph, drawPoint, print } = require("./02-graph");

let chalk = require("chalk");
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;
let w = chalk.white;

const lines = {
  pureLine: {
    m: m("   ============================================================================="),
    y: y("   ============================================================================="),
  },
  start: y("   =================================== START ==================================="),
  end: r("   ==================================== END ===================================="),
  info: {
    1: `${y("   =======")}${g("                Input X, Y => (x: num,y: num)                 ")}${y("=======")}`,
    2: `${y("   =======")}${g("                (0 <= x <= 24), (0 <= y <= 24)                 ")}${y("=======")}`,
  },
  errMsg: {
    range: `${r(`                  >> RANGE_ERROR: Check the input range please. <<`)}`,
    triangle: `${r(`================>> ERROR: Not a triangle <<================`)}`,
    rectangle: `${r(`================>> ERROR: Not a rectangle <<===============`)}`,
  },
};

function shapes(shape, result) {
  console.log(lines.pureLine.m);
  console.log(`                         ${b(`${shape}`)} is ${y(`${result.toFixed(8)}`)}`);
  console.log(lines.pureLine.m);
  console.log(lines.end);
}
const readline = require("readline");
const rl = readline.createInterface(process.stdin);

//=========================================================================================

// START
startInfo();

// Check input Fn
const checkInput = (a, b) => a < 0 || a > 24 || b < 0 || b > 24;

// Location box (feat. count)
let locationBox = { count: 0 };

function startInfo() {
  console.log(y(""));
  console.log(lines.start);
  console.log(lines.info[1]);
  console.log(lines.info[2]);
  console.log(lines.pureLine.y);
  console.log(`${y("   > Input location: ")}`);
}

function listeningQuit(data) {
  if (data === "q") {
    console.log(lines.end);
    rl.close();
  }
}
// .replace(')-(', ',').split('')
function inputParsing(data) {
  function checkInputNum(data) {
    if (data.includes(")-(")) {
      return data.replace(")-(", ",").replace(")-(", ",").replace(")-(", ",").split("").includes("-");
    } else {
      return data.split("").includes("-");
    }
  }

  if (checkInputNum(data)) {
    console.log(checkInputNum(data));
    return err.range();
  }
  if (data.includes("-")) {
    let dataArr = data.split("-");
    for (item of dataArr) {
      inputParsing(item);
    }
  } else {
    let tempArr = data.split("(").join("").split(")").join("").split(",");
    if (checkInput(parseInt(tempArr[0]), parseInt(tempArr[1]))) {
      locationBox = { count: 0 };
      return console.log(lines.errMsg.range);
    }
    let location = new Point(parseInt(tempArr[0]), parseInt(tempArr[1]));
    locationBox.count++;
    locationBox[locationBox.count] = location;
  }
  return locationBox;
}

function drawEachShape(obj) {
  let graph = drawGraph();
  let point = "";
  for (let i = 1; i < obj.count + 1; i++) {
    point = drawPoint(graph, obj[i].cols, obj[i].rows);
  }
  print(point);
}

// Readline
rl.on("line", (line) => {
  // Input section
  listeningQuit(line);
  inputParsing(line);

  // Point
  if (locationBox.count === 1) {
    drawEachShape(locationBox);
  }
  // Line
  if (locationBox.count === 2) {
    drawEachShape(locationBox);
    end.distance(locationBox);
  }
  // Triangle Area
  if (locationBox.count === 3) {
    drawEachShape(locationBox);

    // Check Triangle
    if (!isTriangle(locationBox)) {
      err.notTriangle(locationBox);
    } else {
      end.triangle(locationBox);
    }
  }
  // Rectangle Area
  if (locationBox.count === 4) {
    drawEachShape(locationBox);

    // Check Rectangle
    if (!isRectangle(locationBox)) {
      err.notRectangle(locationBox);
    } else {
      end.rectangle(locationBox);
    }
  }
}).on("close", () => {
  process.exit();
});

// Pythagoras
const isPythagoras = (long, short1, short2) => (long ** 2).toFixed(8) === (short1 ** 2 + short2 ** 2).toFixed(8);

// All possible Rectangle lengths
function distanceBox(obj) {
  let lineBox = [];

  for (let i = 1; i < obj.count + 1; i++) {
    for (let j = i + 1; j < obj.count + 1; j++) {
      lineBox.push(new Line(obj[i], obj[j]).distance());
    }
  }

  let sortedBox = lineBox.sort((a, b) => b - a);
  let setBox = new Set(sortedBox);
  let arrBox = Array.from(setBox);
  return arrBox;
}

//
function getRectangleLines(obj) {
  let arrBox = distanceBox(obj);
  if (isPythagoras(arrBox[0], arrBox[1], arrBox[1])) {
    let distance = [arrBox[1], arrBox[1]];
    return distance;
  } else {
    let distance = [arrBox[1], arrBox[2]];
    return distance;
  }
}

//====================================== 도형체크 =====================================

// Triangle
function isTriangle(obj) {
  let distance1 = new Line(obj[1], obj[2]).distance();
  let distance2 = new Line(obj[2], obj[3]).distance();
  let distance3 = new Line(obj[3], obj[1]).distance();
  let distance = [distance1, distance2, distance3];
  let sortedDistance = distance.sort((a, b) => b - a);
  return sortedDistance[0] < sortedDistance[1] + sortedDistance[2];
}

// Rectangle
function isRectangle(obj) {
  let arrBox = distanceBox(obj);
  if ((arrBox.length === 2 || arrBox.length === 3) && isPythagoras(arrBox[0], arrBox[1], arrBox[1])) {
    return true;
  }
  return false;
}

//======================================== 탈출 =======================================

// End

const end = {
  distance: function (obj) {
    let distance = new Line(obj[1], obj[2]).distance();
    shapes("Distance", distance);
    rl.close();
  },
  triangle: function (obj) {
    let distance1 = new Line(obj[1], obj[2]).distance();
    let distance2 = new Line(obj[2], obj[3]).distance();
    let distance3 = new Line(obj[3], obj[1]).distance();
    let area = new Area(distance1, distance2, distance3).triangleArea();
    shapes("Triangle Area", area);
    rl.close();
  },
  rectangle: function (obj) {
    let rectangleLines = getRectangleLines(obj);
    let area = new Area(rectangleLines[0], rectangleLines[1]).rectangleArea();
    shapes("Rectangle Area", area);
    rl.close();
  },
};

// Error
const err = {
  range: function () {
    locationBox = { count: 0 };
    return console.log(lines.errMsg.range);
  },
  notTriangle: function () {
    locationBox = { count: 0 };
    return console.log(lines.errMsg.triangle);
  },
  notRectangle: function () {
    locationBox = { count: 0 };
    return console.log(lines.errMsg.rectangle);
  },
};

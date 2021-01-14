var fs = require("fs");
var input = fs.readFileSync("./test-case.js").toString().split("\n");
const { Point, Line, Area } = require("./01-shape-class");

let chalk = require("chalk");
let y = chalk.yellow;
let b = chalk.blueBright;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;

console.log(y(""));
console.log(y("==================== START ===================="));
console.log(`${y("==")}${g("      Input X, Y => (x: num, y: num)       ")}${y("==")}`);
console.log(`${y("==")}${g("      (0 <= x <= 24), (0 <= y <= 24)       ")}${y("==")}`);
console.log(y("==============================================="));
console.log(y("Input location: "));

// Check input Fn
const checkInput = (a, b) => a < 0 || a > 24 || b < 0 || b > 24;

// Location box (feat. count)
let locationBox = { count: 0 };

function inputParsing(data) {
  if (data === "q") {
    console.log(r("===================== END ====================="));
  }
  if (data.includes("-")) {
    let dataArr = data.split("-");
    for (item of dataArr) {
      inputParsing(item);
    }
  } else {
    let tempArr = data.split("(").join("").split(")").join("").split(", ");
    if (checkInput(parseInt(tempArr[0]), parseInt(tempArr[1]))) {
      locationBox = { count: 0 };
      return console.log(`${r(`>> RANGE_ERROR: Check the input range please. <<`)}`);
    }
    let location = new Point(parseInt(tempArr[0]), parseInt(tempArr[1]));
    locationBox.count++;
    locationBox[locationBox.count] = location;
  }
  return locationBox;
}

// Input section // test

function test(arr) {
  for (cmd of arr) {
    inputParsing(cmd);
    goTest(locationBox);
  }
}

// test(input);
inputParsing(input[0]);
goTest(locationBox);
inputParsing(input[1]);
goTest(locationBox);
inputParsing(input[2]);
goTest(locationBox);

// console.log(`locationBox.count: ${y(`${locationBox.count}`)}`);
// Check Count (operate straight lenght Fn, if the count equal 2)
function goTest(obj) {
  if (locationBox.count === 2) {
    let distance = new Line(locationBox[1], locationBox[2]).distance();
    console.log(m("==============================================="));
    console.log(`         ${b("Distance is")} ${y(`${distance}`)}`);
    console.log(m("==============================================="));
    console.log(r("===================== END ====================="));
  }
  // Check Count (operate triangle area, if the count equal 3)
  if (locationBox.count === 3) {
    let distance1 = new Line(locationBox[1], locationBox[2]).distance();
    let distance2 = new Line(locationBox[2], locationBox[3]).distance();
    let distance3 = new Line(locationBox[3], locationBox[1]).distance();
    let distance = [distance1, distance2, distance3];
    let sortedDistance = distance.sort((a, b) => b - a);
    // Check Triangle
    if (sortedDistance[0] >= sortedDistance[1] + sortedDistance[2]) {
      locationBox = { count: 0 };
      return console.log(`${r(`===========>> ERROR: Not triangle <<===========`)}`);
    }
    let area = new Area(distance1, distance2, distance3).triangleArea();
    console.log(m("==============================================="));
    console.log(`         ${b("Triangle Area is")} ${y(`${area}`)}`);
    console.log(m("==============================================="));
    console.log(r("===================== END ====================="));
  }
  // // Check Count (operate rectangle area, if the count equal 4)
  if (locationBox.count === 4) {
    let distance1 = new Line(locationBox[1], locationBox[2]).distance();
    let distance2 = new Line(locationBox[1], locationBox[3]).distance();
    let distance3 = new Line(locationBox[2], locationBox[3]).distance();

    let area = new Area(distance1, distance2, distance3).triangleArea();
    console.log(m("==============================================="));
    console.log(`         ${b("Triangle Area is")} ${y(`${area}`)}`);
    console.log(m("==============================================="));
    console.log(r("===================== END ====================="));
  }
}

const { Point, Line, Area } = require("./01-shape-class");

let chalk = require("chalk");
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;

const readline = require("readline");
const rl = readline.createInterface(process.stdin);
console.log(y(""));
console.log(y("==================== START ===================="));
console.log(`${y("==")}${g("      Input X, Y => (x: num, y: num)       ")}${y("==")}`);
console.log(`${y("==")}${g("      (0 <= x <= 24), (0 <= y <= 24)       ")}${y("==")}`);
console.log(y("==============================================="));
console.log(`${y("> Input location: ")}`);

// Check input Fn
const checkInput = (a, b) => a < 0 || a > 24 || b < 0 || b > 24;

// Location box (feat. count)
let locationBox = { count: 0 };

function inputParsing(data) {
  if (data === "q") {
    console.log(r("===================== END ====================="));
    rl.close();
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

// Readline

rl.on("line", (line) => {
  // Input section
  inputParsing(line);

  // console.log(`locationBox.count: ${y(`${locationBox.count}`)}`);
  // Check Count (operate straight lenght Fn, if the count equal 2)
  if (locationBox.count === 2) {
    let distance = new Line(locationBox[1], locationBox[2]).distance();
    console.log(m("==============================================="));
    console.log(`         ${b("Distance is")} ${y(`${distance}`)}`);
    console.log(m("==============================================="));
    console.log(r("===================== END ====================="));
    rl.close();
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
      return console.log(`${r(`===========>> ERROR: Not a triangle <<===========`)}`);
    }
    let area = new Area(distance1, distance2, distance3).triangleArea();
    console.log(m("==============================================="));
    console.log(`         ${b("Triangle Area is")} ${y(`${area}`)}`);
    console.log(m("==============================================="));
    console.log(r("===================== END ====================="));
    rl.close();
  }
  // Check Count (operate rectangle area, if the count equal 4)
  if (locationBox.count === 4) {
    // Check the condition of rectangle
    if (!isRectangle(locationBox)) {
      locationBox = { count: 0 };
      return console.log(`${r(`===========>> ERROR: Not a rectangle <<===========`)}`);
    }
    let rectangleLines = getRectangleLines(locationBox);
    // 아 갑자기 생각났는데 해답은 locationBox에 있나...하..

    let area = new Area(rectangleLines[0], rectangleLines[1]).rectangleArea();
    console.log(m("==============================================="));
    console.log(`         ${b("Rectangle Area is")} ${y(`${area}`)}`);
    console.log(m("==============================================="));
    console.log(r("===================== END ====================="));
    rl.close();
  }
}).on("close", () => {
  process.exit();
});

const isPythagoras = (long, short1, short2) =>
  Math.floor(long ** 2) === Math.floor(short1 ** 2) + Math.floor(short2 ** 2);
function getRectangleLines(obj) {
  // 직사각형의 조건 = 직각 삼각형을 포함해야함. 성립? 마름모.. 가시고, 사다리꼴.. 당연히 안되고..
  // 사각형 전수조사하면 무조건 6개 나옴(4변, 대각선2)
  // Set해서
  // 2개 남으면 정사각형, 마름모
  // 3개 남으면 직사각형, 평행사변형
  // 그 이상이면 버린다
  // 마름모랑 평행사변형은 피타고라스(직각삼각형)로 먼저 거른다
  // 먼저 못거른다. 세트부터.
  let lineBox = [];
  for (let i = 1; i < obj.count + 1; i++) {
    for (let j = i + 1; j < obj.count + 1; j++) {
      lineBox.push(new Line(obj[i], obj[j]).distance());
    }
  }
  let sortedBox = lineBox.sort((a, b) => b - a);
  let setBox = new Set(sortedBox);
  let arrBox = Array.from(setBox);
  // 정사각형, 마름모
  if (arrBox.length === 2 && isPythagoras(arrBox[0], arrBox[1], arrBox[1])) {
    let distance = [arrBox[1], arrBox[1]];
    return distance;
  }
  // 직사각형, 평행사변형
  if (arrBox.length === 3 && isPythagoras(arrBox[0], arrBox[1], arrBox[2])) {
    let distance = [arrBox[1], arrBox[2]];
    return distance;
  }
  return;
}

function isRectangle(obj) {
  let lineBox = [];
  for (let i = 1; i < obj.count + 1; i++) {
    for (let j = i + 1; j < obj.count + 1; j++) {
      lineBox.push(new Line(obj[i], obj[j]).distance());
    }
  }
  let sortedBox = lineBox.sort((a, b) => b - a);
  let setBox = new Set(sortedBox);
  let arrBox = Array.from(setBox);
  // 정사각형, 마름모
  if (arrBox.length === 2 && isPythagoras(arrBox[0], arrBox[1], arrBox[1])) {
    return true;
  }
  // 직사각형, 평행사변형
  if (arrBox.length === 3 && isPythagoras(arrBox[0], arrBox[1], arrBox[2])) {
    return true;
  }
  return false;
}

// 사용자가 점에 대한 좌표 정보를 입력하는 메뉴를 구성한다.
// 좌표 정보는 괄호"(", ")"로 둘러쌓여 있으며 쉼표(,)로 x값과 y값을 구분한다.
// X, Y좌표 모두 최대 24까지만 입력할 수 있다.
// 입력 범위를 초과할 경우 에러 문구를 출력하고 다시 입력을 받는다.
// 정상적인 좌표값을 입력한 경우, 해당 좌표에 특수문자를 표시한다.
// 좌표값을 두 개 입력한 경우, 두 점을 있는 직선으로 가정한다. 좌표값과 좌표값 사이는 '-' 문자로 구분한다.
// 직선인 경우는 두 점 사이 거리를 계산해서 출력한다.
// =================================================================================================

let chalk = require("chalk");
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(y(""));
console.log(y("==================== START ===================="));
console.log(`${y("==")}${g("      Input X, Y => (x: num, y: num)       ")}${y("==")}`);
console.log(`${y("==")}${g("      (0 <= x <= 24), (0 <= y <= 24)       ")}${y("==")}`);
console.log(y("==============================================="));
console.log(y("Input location: "));

// drawGraph();

// Location box (feat. count)
const locationBox = { count: 0 };

// Readline
rl.on("line", (line) => {
  // Input section
  let inputCMD = line.split("(").join("").split(")").join("").split(", ");
  let input = [parseInt(inputCMD[0]), parseInt(inputCMD[1])];

  // Check input value (range)
  checkInput(input[0], input[1]);
  console.log(m("==============================================="));
  console.log(y(`Your location: (${input[0]}, ${input[1]})`));

  // Counter++
  locationBox.count++;
  console.log(`locationBox.count: ${y(`${locationBox.count}`)}`);

  // Insert locationBox
  let location = new Location(input[0], input[1]);
  locationBox[locationBox.count] = location;
  console.log(locationBox);

  // Check Count (operate straight lenght Fn, if the count is more than 2)
  if (locationBox.count >= 2) {
    console.log(m("==============================================="));
    console.log(`         ${b("Distance is")} ${y(`${straightLength(locationBox[1], locationBox[2])}`)}`);
    console.log(m("==============================================="));
    console.log(r("===================== END ====================="));
    rl.close();
  }

  // Exit
  if (inputCMD[0] === "q") {
    console.log(r("===================== END ====================="));
    rl.close();
  }
});

// Check input Fn
function checkInput(a, b) {
  if (a < 0 || a > 24 || b < 0 || b > 24) {
    return console.log(`${r(`>> RANGE_ERROR: Check the input range please. <<`)}`);
  }
}

class Location {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
  }
}

function straightLength(obj1, obj2) {
  let currentLine1 = lineLength(obj1.rows, obj2.rows);
  let currentLine2 = lineLength(obj1.cols, obj2.cols);
  return pythagoras(currentLine1, currentLine2);
}

function pythagoras(line1, line2) {
  return Math.sqrt(line1 ** 2 + line2 ** 2);
}

function lineLength(loc1, loc2) {
  return Math.abs(loc1 - loc2);
}

// console.log("24|");
// console.log("  |");
// console.log("22|");
// console.log("  |");
// console.log("20|");
// console.log("  |");
// console.log("18|");
// console.log("  |");
// console.log("16|");
// console.log("  |");
// console.log("14|");
// console.log("  |");
// console.log("12|");
// console.log("  |");
// console.log("10|");
// console.log("  |");
// console.log(" 8|");
// console.log("  |");
// console.log(" 6|");
// console.log("  |");
// console.log(" 4|");
// console.log("  |");
// console.log(" 2|");
// console.log("  |");
// console.log("  +ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
// console.log(" 0    2  4  6  8  10  12  14  16  18  20  22  24");
function drawGraph(x, y) {
  const RANGE = 24;
  for (let i = 1; i < RANGE + 1; i++) {
    console.log("  |");
  }
}

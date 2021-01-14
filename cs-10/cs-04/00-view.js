const { Location, straightLength, Point, Line } = require("./01-shape-class");

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
  // Check Count (operate straight lenght Fn, if the count is more than 2)
  if (locationBox.count === 2) {
    let distance = new Line(locationBox[1], locationBox[2]).distance();
    console.log(m("==============================================="));
    console.log(`         ${b("Distance is")} ${y(`${distance}`)}`);
    console.log(m("==============================================="));
    console.log(r("===================== END ====================="));
    rl.close();
  }
  if (locationBox.count === 3) {
    console.log("triangle");
  }
});

// 사용자가 점에 대한 좌표 정보를 입력하는 메뉴를 구성한다.
// 좌표 정보는 괄호"(", ")"로 둘러쌓여 있으며 쉼표(,)로 x값과 y값을 구분한다.
// X, Y좌표 모두 최대 24까지만 입력할 수 있다.
// 입력 범위를 초과할 경우 에러 문구를 출력하고 다시 입력을 받는다.
// 정상적인 좌표값을 입력한 경우, 해당 좌표에 특수문자를 표시한다.
// 좌표값을 두 개 입력한 경우, 두 점을 있는 직선으로 가정한다. 좌표값과 좌표값 사이는 '-' 문자로 구분한다.
// 직선인 경우는 두 점 사이 거리를 계산해서 출력한다.
// =================================================================================================
// 좌표값을 두 개 입력한 경우, 두 점을 있는 직선으로 가정한다. 좌표값과 좌표값 사이는 '-' 문자로 구분한다.
// 좌표값을 세 개 입력한 경우, 세 점을 연결하는 삼각형으로 가정한다.
// 삼각형인 경우 삼각형의 넓이를 계산해서 출력한다.
// =================================================================================================

class Location {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
  }
}

class Point {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
  }
}
class Line {
  constructor(point1, point2) {
    // super();
    this.point1 = point1;
    this.point2 = point2;
  }

  distance() {
    let rowsLine = lineLength(this.point1.rows, this.point2.rows);
    let colsLine = lineLength(this.point1.cols, this.point2.cols);

    function pythagoras(line1, line2) {
      return Math.sqrt(line1 ** 2 + line2 ** 2);
    }

    function lineLength(loc1, loc2) {
      return Math.abs(loc1 - loc2);
    }
    return pythagoras(rowsLine, colsLine);
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

class Graph {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
  }

  drawRow() {
    console.log("ㅡ");
  }

  drawCols() {
    console.log("|");
  }
}

module.exports = { straightLength, Location, Point, Line };

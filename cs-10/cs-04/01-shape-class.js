class Point {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
  }
}

class Line {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
  }
}

Line.prototype.distance = function () {
  let rowsLine = lineLength(this.point1.rows, this.point2.rows);
  let colsLine = lineLength(this.point1.cols, this.point2.cols);

  function pythagoras(line1, line2) {
    return Math.sqrt(line1 ** 2 + line2 ** 2);
  }

  function lineLength(loc1, loc2) {
    return Math.abs(loc1 - loc2);
  }
  return pythagoras(rowsLine, colsLine);
};

class Area {
  constructor(line1, line2, line3, line4) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.line4 = line4;
  }
  triangleArea() {
    let s = (this.line1 + this.line2 + this.line3) / 2;
    let area = Math.sqrt(s * (s - this.line1) * (s - this.line2) * (s - this.line3));
    return area;
  }
  rectangleArea() {
    return this.line1 * this.line2;
  }
}

module.exports = { Point, Line, Area };

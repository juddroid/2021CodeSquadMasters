let chalk = require('chalk');
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;
let w = chalk.white;

class ProgressBar {
  constructor(barLegnth = 50, repeat = 20000, thread = 50) {
    (this.repeat = repeat),
      (this.thread = thread),
      (this.status = Array.from({ length: barLegnth }, (_, i) => ' ')),
      (this.target = this.repeat * this.thread);
  }

  cal(cnt) {
    let percent = (cnt / this.target) * 100;
    return percent;
  }

  draw(cnt) {
    let start = '[';
    let finish = ']';
    let percent = this.cal(cnt);
    let space = '';
    let starStatus = this.status.map((el, i) => {
      if (i <= this.cal(cnt) / 2 + 1) {
        el = '*';
      }
      return el;
    });
    for (let i = 0; i < starStatus.length; i++) {
      space += starStatus[i];
    }

    process.stdout.write(
      `\r${start} ${y(space)} ${finish} ${m(Math.floor(percent))} ${m('%')} [${cnt} / ${this.target}]`
    );
  }
}

module.exports = { ProgressBar };

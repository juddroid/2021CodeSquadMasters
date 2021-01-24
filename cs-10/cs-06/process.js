// 운영체제가 다루는 프로세스를 일정한 시간동안 실행하는 프로그램을 구현한다.
// 프로세스 종류를 4개 정하고, 프로세스 마다 최대 동작 시간을 겹치지 않도록 결정한다.
// 예) 프로세스A : 3초, 프로세스B : 5초, 프로세스C : 7초, 프로세스D : 11초
// 운영체제는 한 번에 프로세스 하나씩만 1초동안만 실행할 수 있다. 해당 프로세스 외 다른 프로세스는 실행하지 않는다.
// 1초 이후에는 같은 프로세스가 아니라 다른 프로세스를 실행해야 한다. 만약 프로세스가 1개만 남은 경우 반복해서 같은 프로세스를 실행할 수 있다.
// 프로세스 상태는 준비ready, 실행running, 대기waiting, 종료terminated 4 가지 상태 중에 하나다.
// 이 프로그램을 시작하면, 랜덤으로 프로세스 3개를 생성하고 대기 큐에 추가한다.
// 프로세스는 ready 또는 waiting 상태에서만 실행상태로 바뀔 수 있다.
// 누적 동작 시간이 최대 동작 시간만큼 실행한 프로세스는 terminated 상태로 바뀐다.
// 누적 동작 시간이 최대 동작 시간보다 작으면 다시 waiting 상태가 된다.
// 프로세스마다 작업 정보를 포함하는 데이터 구조를 만든다.
// 프로그램은 1초마다 전체 프로세스 상태와 누적 실행 시간을 표시한다.
// 프로그램은 모든 프로세스가 멈추고 나면 종료한다.
// 동작 예시에서 "." 점은 초단위로 시간이 지나가는 것을 표현한 예시일 뿐, 시간 흐름을 표현하면 출력 형식이 완벽하게 동일할 필요는 없다.

let chalk = require('chalk');
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;
let w = chalk.white;

const status = {
  READY: 'ready',
  RUNNING: 'running',
  WAITING: 'waiting',
  TERMINATED: 'terminated',
};

const Random = {
  // 4 kinds of procsses and each process get different operating time by randomProcessTimeFn
  createList: (num) => {
    const randomProcessTime = (num) => {
      const temp = () => Math.floor(Math.random() * (10 - 0) + 1);
      let tempArr = [];
      while (tempArr.length !== num) {
        tempArr.push(temp());
        tempSet = new Set(tempArr);
        tempArr = Array.from(tempSet);
      }
      return tempArr;
    };
    let arr = Array.from({ length: num }, (_, i) => i);
    // let randomProcessTimeList = randomProcessTime(num);
    let randomProcessTimeList = randomProcessTime(num);
    let list = arr.map((el, i) => (el[i] = new Process(`Process${i + 1}`, randomProcessTimeList[i])));
    return list;
  },
  execList: (list) => {
    const temp = () => Math.floor(Math.random() * (list.length - 0) + 0);
    const tempNum = temp();
    const execList = list.filter((_, i) => i !== tempNum);
    return execList;
  },
};

// Print process` information

const Print = {
  currentInfo: (process) => {
    console.log(``);
    console.log(b(` ================ Create ${process.length} Processes ================ `));
    console.table(process);
  },

  execListInfo: (process) => {
    console.log(``);
    console.log(m(` ============ ${process.length} Processes ready to Exec ============= `));
    console.table(process);
  },
  execResult: (queue) => {
    let print = Array.from({ length: queue.processList.length }, (_, i) => i);
    console.log(``);
    console.log(g(`===============================================`));
    console.log(``);
    let basicPrint = print.map(
      (el, i) =>
        (el = `${queue.processList[i].name}(${queue.processList[i].current}), ${queue.processList[i].elapsed} / ${queue.processList[i].second}sec\n`)
    );
    let lastPrint = basicPrint.join('');
    console.log(y(lastPrint));

    console.log(g(`===============================================`));
  },
};

class Process {
  constructor(name, second, elapsed = 0, current = status.READY) {
    this.name = name;
    this.second = second;
    this.elapsed = elapsed;
    this.current = current;
  }
}

class Queue {
  constructor(processList) {
    this.processList = processList;
    this.queue = null;
    this.count = 0;
    this.keepGoing = true;
  }

  initializing() {
    for (const key of this.processList) {
      key.current = status.WAITING;
    }
    this.queue = this.processList[0];
    this.print();
  }

  nextQue() {
    if (this.isTerminated()) {
      this.queue.current = status.TERMINATED;
    }

    if (this.queue.current === status.RUNNING) {
      this.queue.current = status.WAITING;
    }

    let terminated = this.processList.filter((el) => el.current === status.TERMINATED);
    let waiting = this.processList.filter((el) => el.current === status.WAITING);

    let elapsed = waiting.filter((el) => el.elapsed < this.queue.elapsed);

    if (terminated.length === this.processList.length) {
      this.print();
      this.keepGoing = false;
      return this.printExit();
    }
    if (elapsed.length === 0) {
      this.queue = waiting[0];
    } else if (elapsed.length === 0 && waiting.length === 0) {
      console.log('here');
      this.queue = this.queue;
    } else {
      this.queue = elapsed[0];
    }
  }

  processExecutor() {
    this.queue.elapsed++;
    this.queue.current = status.RUNNING;
    this.print();
    this.nextQue();
  }

  isTerminated() {
    // let terminated = this.processList.filter((el) => el.current === status.TERMINATED);
    return this.queue.elapsed === this.queue.second;

    // if (terminated.length === this.processList.length) {
    //   this.print();
    //   return this.printExit();
    // }
  }

  print() {
    // let print = Array.from({ length: this.processList.length }, (_, i) => `${i}`);
    if (this.count < 10) {
      this.count = ` ${this.count}`;
    }
    console.log(``);
    console.log(g(`========================= ${this.count}sec =========================`));
    console.log(``);
    // let basicPrint = print.map(
    //   (_, i) =>
    //     `${this.processList[i].name}(${this.processList[i].current}), ${this.processList[i].elapsed} / ${this.processList[i].second}sec\n`
    // );
    // let lastPrint = basicPrint.join('');
    // console.log(y(lastPrint));
    console.table(this.processList);
    console.log(g(`=========================================================`));
    this.count++;
  }

  printExit() {
    console.log(m(`=========================================================`));
    console.log(`${m(`================= `)}${y(`F   I   N   I   S   H`)}${m(` =================`)}`);
    console.log(m(`=========================================================`));
  }
}

// console.log(`queue`);
// console.table(queue.queue);
// console.log(`process`);
// console.table(queue.processList);

module.exports = { Print, Random, status, Queue, Process };

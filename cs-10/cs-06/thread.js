// 각 프로세스는 스레드를 만들 수 있고, 스레드가 있으면 스레드마다 실행 시간을 2초 단축하는 효과가 있다고 가정한다.

// 프로그램을 시작할 때 프로세스 별로 최대 작업 시간을 2로 나눴을 때 몫만큼 스레드를 생성한다.

// 예) 프로세스 3초 -> 스레드 1개 , 프로세스 6초 -> 스레드 3개
// 프로그램이 시작하면 랜덤으로 프로세스 3개를 생성하고, 스레드 개수도 표시한다.

// 프로그램은 모든 프로세스 작업이 끝나면 종료한다.

// 화면 구성과 출력 양식은 자신만의 스타일로 표현해도 된다.

const { Print, Random, status, Queue, Process } = require('./process.js');

class Thread extends Process {
  constructor(name, second) {
    super(name, second);
    this.thread = 1;
  }
}

class ThreadQueue extends Queue {
  threadExecutor() {
    this.queue.elapsed += this.queue.thread;
    if (this.queue.elapsed > this.queue.second) {
      this.queue.elapsed = this.queue.second;
    }
    this.queue.current = status.RUNNING;
    this.print();
    this.nextQue();
  }
  // waiting 배열에서 다음 큐를 찾을 때, 기준변경 필요
  // threadNextQue() {
  //   if (this.isTerminated()) {
  //     this.queue.current = status.TERMINATED;
  //   }

  //   if (this.queue.current === status.RUNNING) {
  //     this.queue.current = status.WAITING;
  //   }

  //   let terminated = this.processList.filter((el) => el.current === status.TERMINATED);
  //   let waiting = this.processList.filter((el) => el.current === status.WAITING);
  //   let elapsed = waiting.filter((el) => el.elapsed < this.queue.elapsed);

  //   if (terminated.length === this.processList.length) {
  //     this.print();
  //     this.keepGoing = false;
  //     return this.printExit();
  //   }
  //   if (elapsed.length === 0) {
  //     this.queue = waiting[0];
  //   } else if (elapsed.length === 0 && waiting.length === 0) {
  //     console.log('here');
  //     this.queue = this.queue;
  //   } else {
  //     this.queue = elapsed[0];
  //   }
  // }
}

const RandomThread = {
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
    let randomProcessTimeList = randomProcessTime(num);
    let list = arr.map((el, i) => (el[i] = new Thread(`Process${i + 1}`, randomProcessTimeList[i])));
    return list;
  },
};

module.exports = { ThreadQueue, RandomThread };

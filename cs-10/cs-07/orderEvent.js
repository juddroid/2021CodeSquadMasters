// 1) 주문 이벤트 요구사항
// 직접 스레드를 만드는 대신에, Event를 처리하는 비동기 이벤트 처리하도록 구현한다.
// 노드는 Event Emitter 참고
// 주문 담당자(Cashier)는 음료 주문을 연속해서 받을 수 있다.
// 음료 주문을 받으면 주문 대기표(Queue)에 추가한다.
// 주문 대기표도 이벤트를 받아서 처리하는 별도 모듈/객체로 분리해서 구현한다.

// 매니저(Manager)는 음료를 확인하기 위해서 주문 대기표를 1초마다 확인한다.

// 주문이 있을 경우 작업이 비어있는 (제작할 수 있는) 바리스타에게 작업 이벤트를 전달한다.
// 바리스타(Barista)는 동시에 2개까지 음료를 만들 수 있다고 가정한다.
// 스레드를 직접 생성하는 게 아니라 이벤트 방식으로 동작해야 한다.
// 바리스타는 음료를 만들기 시작할 때와 끝날 때 마다 이벤트를 발생한다.
// 이벤트가 발생할 때마다 음료 작업에 대한 로그를 출력한다.
// 매니저(Manager)는 바리스타가 보낸 특정 고객의 음료 제작 완료 이벤트를 받으면 현황판을 업데이트한다.
// 현황판(DashBoard)는 음료 주문 완성표를 주기적으로 화면에 출력한다.
// 고객별로 음료수에 대해 대기중/제작중/완료 상태를 표시한다.
// 현황판도 이벤트를 받아서 처리하는 별도 모듈/객체로 분리해서 구현한다.
// 아래 동작 예시는 이해를 돕기위한 예시일 뿐 동일하게 출력할 필요 없다. 각 요구사항을 확인하기 위해서 대기표, 현황판 등을 어떤 구조로 어떻게 구분해서 표시하는 게 적당한지 출력 형식을 고민한다.

// 동작 예시
// 바리스타가 1명만 있다고 가정했을 때 동작 예시

// > 메뉴  =  1. 아메리카노(3s)    2. 카페라떼(5s)    3. 프라프치노(10s)
// > 주문할 음료를 입력하세요. 예) 아메리카노 2개 => 1:2
// > 1:2
// /1,1/
// 아메리카노 시작
// > 3:2
// /1,3,3/
// 아메리카노 시작
// > 2:2
// /3,3,2,2/
// 아메리카노 완성
// /3,2,2/
// 프라프치노 시작
// 아메리카노 완성
// /2,2/
// 프라프치노 시작
// ..........
// 프라프치노 완성
// 프라프치노 완성
// /2/
// 카페라떼 시작
// //
// 카페라떼 시작
// ...
// 카페라떼 완성
// 카페라떼 완성
// 모든 메뉴가 완성되었습니다.

const EventEmitter = require('events');
const emitter = new EventEmitter();

const { setInterval } = require('timers');
let chalk = require('chalk');
const { emit } = require('process');
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;
let w = chalk.white;

const MENU = {
  1: {
    emoji: `☕`,
    menu: `Americano`,
    sec: 3,
  },
  2: {
    emoji: `🐴`,
    menu: `CaffeLatte`,
    sec: 5,
  },
  3: {
    emoji: `🍿`,
    menu: `Frappuccino`,
    sec: 10,
  },
};

// ============================== Cashier =================================

class Cashier {
  constructor() {
    this.readline = require('readline');
    this.rl = this.readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: `😃 May I Take Your Order: `,
    });

    this.guestNumber = 0;
    this.queue = {};
  }

  onDuty() {
    this.order();
    this.waiting();
  }

  waiting() {
    this.rl.prompt();
    this.rl.on('line', (order) => {
      console.log(`Thank you 😄 plz Check your order: ${order}`);
      let orders = order.split(':');
      emitter.emit('order', ++this.guestNumber, orders[0], orders[1]);

      if (order === 'q') {
        rl.close();
      }
    });
  }

  order() {
    emitter.on('order', (guest, drink, cups) => {
      this.addQueue(guest, drink, cups);
    });
  }

  addQueue(guest, drink, cups) {
    for (const idx in MENU) {
      if (idx === drink) {
        this.queue[guest] = {
          drink: MENU[idx].emoji,
          cups: cups,
          sec: MENU[idx].sec,
        };
      }
    }
    this.sayOrder();
    manager.checkDashBoard(this.queue);
  }

  // 주문받았습니다~
  sayOrder() {
    console.log(``);
    console.log(y(`========== Order List ==========`));
    console.table(this.queue);
  }
}

// ============================== Manager =================================
class Manager {
  constructor(queue) {
    this.queue = queue;
    this.managerQueue = this.queue;
  }

  onDuty() {
    setInterval(() => {
      this.checkQueue();
    }, 1000);

    // emitter.on('done', (curr) => this.updateDashBoard(curr));
  }

  checkQueue() {
    if (Object.keys(cashier.queue).length > 0) {
      this.checkBarista();
    }
  }

  addOrder() {
    let firstQ = this.queue[Object.keys(this.queue)[0]];

    let order = {
      guest: cashier.guestNumber,
      drink: firstQ.drink,
      sec: firstQ.sec,
    };

    if (firstQ.cups === 0) {
      return delete this.queue[Object.keys(this.queue)[0]];
    }
    barista.working.push(order);
    firstQ.cups--;
    if (firstQ.cups === 0) {
      return delete this.queue[Object.keys(this.queue)[0]];
    }
    console.table(this.queue);
    console.table(this.managerQueue);
  }

  deleteQueue() {}

  checkBarista() {
    if (barista.working.length < 2) {
      this.addOrder();
      emitter.emit('making');
    }
  }

  checkDashBoard(queue) {
    // console.log(``);
    // console.log(b(`========== DASH BOARD ==========`));
    // console.table(queue);
  }
}

// ============================= Barista ================================

class Barista {
  constructor() {
    this.working = [];
  }

  onDuty() {
    emitter.on('making', () => this.making());
  }

  making() {
    const self = this;
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function drink(curr) {
      self.sayStart(curr);
      await delay(curr.sec * 1000);
      self.sayFinish(curr);
      self.working.shift();
    }

    console.log(`============ BARISTA ============`);
    console.table(this.working);
    let current = this.working[0];

    drink(current);
  }

  sayStart(curr) {
    console.log(y(`START => GUEST${curr.guest} => ${curr.drink}`));
  }

  sayFinish(curr) {
    console.log(g(`DONE => GUEST${curr.guest} => ${curr.drink}`));
    emitter.emit('done', curr);
  }
}

class DashBoard {
  constructor(queue) {
    this.queue = queue;
  }
}

class Cafe {
  // cafe open
  open() {
    console.log(``);
    console.log(`${y(` =======`)} ${m(`WELCOME TO RACCOON CAFE`)} ${y(`=======`)}`);
    console.table(MENU);
  }
}

// ========================== R A C C O O N  C A F E =============================

// completion
const RaccoonCafe = new Cafe();

// worker
const cashier = new Cashier();
const manager = new Manager(cashier.queue);
const barista = new Barista();

const dashBoard = new DashBoard(cashier.queue);

// RacconCafe Open
RaccoonCafe.open();

// Cashier on duty
cashier.onDuty();

// Manager on duty
manager.onDuty();

// Barista on duty
barista.onDuty();

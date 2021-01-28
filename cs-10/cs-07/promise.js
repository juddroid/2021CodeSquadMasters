const EventEmitter = require('events');
//import emitter from './eventEmitter.js'
//import readline from ‘readline’;
// const readline = require(‘readline’)
// 주문은 readline input으로 받게 된다..
// input을 적절한 데이터로 parsing 작업
// 주문을 주문 대기표 (order list)에 추가
class Cashier extends EventEmitter {
  constructor() {
    super();
    // readline 세팅
    this.readline = require('readline'); // ReferenceError: require is not defined
    this.rl = this.readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  parse() {
    // 입력 받아서 파싱
    this.rl.on('line', function (line) {
      const [menu, count] = line.split(`:`).map(Number);
      emitter.emit(`newOrder`, menu, count);
      // this.rl.close();
    });
  }
  addList() {}
  init() {
    console.log(`> 메뉴  =  1. 아메리카노(3s)    2. 카페라떼(5s)    3. 프라프치노(10s)`);
    console.log(`> 주문할 음료를 입력하세요. 예) 아메리카노 2개 => 1:2`);
    this.rl.setPrompt(`입력 > `);
    this.rl.prompt();
    this.parse();
    this.closeModule();
  }
  closeModule() {
    this.rl.on('close', function () {
      process.exit();
    });
  }
}
const cashier = new Cashier();
cashier.init();

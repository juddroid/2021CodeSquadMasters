const { Print, Random, Queue } = require('./process.js');
const { ThreadQueue, RandomThread } = require('./thread.js');

// ================= create process ================
const currentProcessList = Random.createList(4);
const currentExecProcessList = Random.execList(currentProcessList);

// =================== print =======================
Print.currentInfo(currentProcessList);
Print.execListInfo(currentExecProcessList);

// ===================== Que =======================
const queue = new Queue(currentProcessList);

function run() {
  function exec() {
    queue.processExecutor();
    if (queue.keepGoing) {
      setTimeout(exec, 1000);
    }
  }

  queue.initializing();

  exec();
  // setInterval(() => queue.processExecutor(), 1000);
}

// run();

// // ================================= multi threads ===========================================================

// // ================= create process ================
// const currentProcessListThread = RandomThread.createList(3);

// currentProcessList.map((el) => {
//   if (parseInt(el.second / 2) === 0) {
//     el.thread = 1;
//   } else {
//     el.thread = parseInt(el.second / 2);
//   }
//   return el;
// });

// // =================== print =======================
// Print.currentInfo(currentProcessList);

// // ===================== Que =======================
// const queue = new ThreadQueue(currentProcessList);

// function run() {
//   function exec() {
//     queue.threadExecutor();
//     if (queue.keepGoing) {
//       setTimeout(exec, 1000);
//     }
//   }

//   queue.initializing();

//   exec();
//   // setInterval(() => queue.processExecutor(), 1000);
// }

// run();

// // queue.initializing();
// // queue.threadExcutor();

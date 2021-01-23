const { Print, Random, Queue } = require('./process.js');

// ================= create process ================
const currentProcessList = Random.createList(4);
const currentExecProcessList = Random.execList(currentProcessList);

// =================== print =======================
Print.currentInfo(currentProcessList);
Print.execListInfo(currentExecProcessList);

// ===================== Que =======================
const queue = new Queue(currentExecProcessList);

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

run();

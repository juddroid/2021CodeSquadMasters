const { myClip, showClips } = require("./cs-03-video-data");

showClips(myClip);

const LINKED_LIST = {
  HEAD: null,
  count: 0,
};

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let inputCMD = line.split(" ");
  link(inputCMD[0], inputCMD[1], parseInt(inputCMD[2]));
  if (inputCMD[0] === "q") {
    rl.close();
  }
});

function link(cmd, id, num) {
  switch (cmd) {
    case "add":
      lastAdd(id);
      break;
    case "insert":
      insert(id, num);
      break;
    case "delete":
      remove(id);
      break;
    case "render":
      render();
      break;
    default:
      break;
  }
}

const checkID = (id) => (!myClip[id] ? true : false);
const existID = (id) => {
  let check = false;
  let current = LINKED_LIST.HEAD;
  while (current) {
    if (current.data === id) {
      check = true;
    }
    current = current.next;
  }
  return check;
};

function firstAdd(id) {
  // insert next link
  let temp = new Node(id, LINKED_LIST.HEAD);
  // insert node to linked list
  LINKED_LIST.HEAD = temp;
  LINKED_LIST.count++;
  draw();
}

function insert(id, num) {
  if (isNaN(num)) {
    return console.error("input number");
  } else if (checkID(id)) {
    return console.error("wrong ID");
  } else if (existID(id)) {
    return console.error("already exsist");
  } else {
    if (num === 0) {
      firstAdd(id);
    } else {
      // insert Fn 자리
      if (num >= LINKED_LIST.count) {
        lastAdd(id);
      } else {
        let temp = new Node(id);
        let current, previous;
        let count = 0;
        current = LINKED_LIST.HEAD;

        while (count < num) {
          previous = current;
          count++;
          current = current.next;
        }
        temp.next = current;
        previous.next = temp;
        LINKED_LIST.count++;
        draw();
      }
    }
  }
}
function lastAdd(id) {
  if (checkID(id)) {
    return console.error("wrong ID");
  } else if (existID(id)) {
    return console.error("already exsist");
  } else {
    let temp = new Node(id);
    let current;
    if (!LINKED_LIST.HEAD) {
      firstAdd(id);
    } else {
      current = LINKED_LIST.HEAD;

      while (current.next) {
        current = current.next;
      }
      current.next = temp;
      LINKED_LIST.count++;
      draw();
    }
  }
}

function remove(id) {
  let current = LINKED_LIST.HEAD;
  let previous = "";
  // remove at first
  if (current.data === id) {
    LINKED_LIST.HEAD = current.next;
  } else {
    // remove at last

    while (current.data !== id) {
      previous = current;
      current = current.next;
    }
    console.log(current);
    previous.next = previous.next.next;
  }
  LINKED_LIST.count--;
  draw();
}

function draw() {
  let head = `|`;
  let end = `---[end]`;
  let graph = `${head}${nodeData()}${end}`;
  console.log(graph);
}

function nodeData() {
  let current = LINKED_LIST.HEAD;
  let info = "";
  while (current) {
    info += `---[${current.data}, ${myClip[current.data].playTime}sec]`;
    current = current.next;
  }
  return info;
}

function render() {
  let time = 0;
  let current = LINKED_LIST.HEAD;
  while (current) {
    time += Number(myClip[current.data].playTime);
    current = current.next;
  }
  console.log(`CLIP COUNT: ${LINKED_LIST.count}EA`);
  console.log(`Play Time: ${time}sec`);
}

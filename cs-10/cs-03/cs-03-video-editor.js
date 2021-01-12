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
      break;
    case "render":
      break;
    default:
      break;
  }
}

function firstAdd(id) {
  // insert next link
  let temp = new Node(id, LINKED_LIST.HEAD);
  // insert node to linked list
  LINKED_LIST.HEAD = temp;
  LINKED_LIST.count++;
  render();
}

function insert(id, num) {
  if (num === 0) {
    firstAdd(id);
  }
  // insert Fn 자리
}
function lastAdd(id) {
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
    render();
  }
}
function find() {}
function remove() {}

function render() {
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

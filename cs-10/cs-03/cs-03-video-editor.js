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

function insert(id, num) {
  if (num === 0) {
    firstAdd(id);
  }
  // insert Fn 자리

  function firstAdd(id) {
    // empty list
    if (LINKED_LIST.count === 0) {
      // insert next link
      let temp = new Node(id, LINKED_LIST.HEAD);
      // insert node to linked list
      LINKED_LIST.HEAD = temp;
      LINKED_LIST.count++;
    }
    render();
    // not empty list
  }
}
function lastAdd() {}
function find() {}
// function delete() {}

function render() {
  let head = `|`;
  let end = `---[end]`;
  let graph = `${head}${nodeData()}${end}`;
  console.log(graph);
}

function nodeData() {
  let current = LINKED_LIST.HEAD;
  while (current) {
    let info = `---[${LINKED_LIST.HEAD.data}, ${
      myClip[LINKED_LIST.HEAD.data].playTime
    }sec]`;
    current = current.next;
    return info;
  }
}

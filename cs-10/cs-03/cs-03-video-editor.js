const { myClip, showClips } = require("./cs-03-video-data");

showClips(myClip);

const LINKED_LIST = {
  HEAD: "head",
};
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let inputCMD = line.split(" ");
  link(inputCMD[0], inputCMD[1], parseInt(inputCMD[2]), myClip, LINKED_LIST);
  if (inputCMD[0] === "q") {
    rl.close();
  }
});

function link(cmd, id, num, obj, list) {
  switch (cmd) {
    case "add":
      add(id, obj);
      break;
    case "insert":
      ins(id, num, obj, list);
      break;
    case "delete":
      del();
      break;
    case "render":
      ren();
      break;
    default:
      break;
  }
}

// 맨뒤에 추가
function add(data_id, obj) {
  for (clip in obj) {
    if (obj[clip].id === data_id) {
      console.log(`${obj[clip].title}${obj[clip].titleNum} is last clip`);
    }
  }
}

function ins(clip_id, list_num, obj, list) {
  for (id in obj) {
    // 0번째에 들어갈 때
    if (list_num === 0 && list.HEAD === "head" && id === clip_id) {
      list[id] = "end";
      list.HEAD = id;
    } else if (list_num === 0 && list.HEAD !== "head" && id === clip_id) {
      list[id] = list.HEAD;
      list.HEAD = id;
    } else if (list_num >= Object.keys(list).length - 1) {
      // Object.keys(list).length - 1 <- 현재 링크된 개수
      // add()
      console.log("go add");
    } else {
    }
  }
  console.log(list.HEAD, id, list);
}

// 시작위치부터 찾아서 삭제
function del() {}

// 전체탐색하면서 재생 시간 더하기
function ren() {}

function draw(id, obj) {
  let head = `|`;
  let end = `---[end]`;
  let graph = `${head}${node(id)}${end}`;
  console.log(graph);

  function node(id, obj) {
    while (id !== "end") {
      console.log(`---[${id}, ${obj[id].playTime}sec]`);
      // id = find(id, obj);
    }
  }

  function find(id, rpt) {
    let CURRENT = list.HEAD;
    while (--rpt != 0) {
      list.CURRENT = CURRENT;
    }
    return CURRENT;
  }
}

// const title = "Raccoon";
// let dataNum;
// let id;
// let playTime;

// console.log(getId());

const TITLE = "Raccoon";
const CLIPS = 13;
const randomPlayTime = () => Math.floor(Math.random() * (15 - 0) + 1);
const getId = function () {
  const ID_LENGTH = 4;
  const randomIndex = () => Math.floor(Math.random() * (string.length - 0) + 0);
  const string = "0123456789abcdefghijklmnopqrstuvwxyz";
  let randomID = "";
  for (let i = 0; i < ID_LENGTH; i++) {
    randomID += string[randomIndex()];
  }
  return randomID;
};
const myVideoClips = {};

console.log("--- VIDEO CLIP ---");

class Clip {
  constructor(title, titleNum, id, playTime, node) {
    this.title = title;
    this.titleNum = titleNum;
    this.id = id;
    this.playTime = playTime;
    this.node = node;
  }
}

function getClips(obj, title, count) {
  for (let i = 1; i < count + 1; i++) {
    let clip = (obj[i] = new Clip(title, i, getId(), randomPlayTime(), "node"));
    console.log(`${clip.title}${clip.titleNum}(${clip.id}): ${clip.playTime}`);
  }
  return obj;
}

getClips(myVideoClips, TITLE, CLIPS);

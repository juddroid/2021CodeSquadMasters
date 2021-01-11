const title = "Raccoon";
let dataNum;
let id;
let playTime;

const randomPlayTime = () => Math.floor(Math.random() * (13 - 0) + 1);
const getId = function () {
  const ID_LENGTH = 4;
  const randomIndex = () => Math.floor(Math.random() * (string.length - 0) + 0);
  const string = "0123456789abcdefghijklmnopqrstuvwxyz";
  let randomID;
  for (let i = 0; i < ID_LENGTH; i++) {
    randomID += string[randomIndex()];
  }
  return randomID;
};

console.log("========== VIDEO CLIP ==========");
const CLIPS = 13;
for (let i = 1; i < CLIPS + 1; i++) {
  dataNum = i;
  playTime = randomPlayTime();
  id = getId();
  // console.log(`${title}${dataNum}(${id}): ${playTime}`);
}

console.log(getId());

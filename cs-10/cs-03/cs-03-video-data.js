const TITLE = "Raccoon";
const CLIPS = 13;
const randomPlayTime = () => Math.floor(Math.random() * (15 - 0) + 1);
const getID = function () {
  const ID_LENGTH = 4;
  let randomID = Math.random()
    .toString(26)
    .slice(2, 2 + ID_LENGTH);
  return randomID;
};
const myVideoClips = {};

class Clip {
  constructor(title, titleNum, playTime) {
    this.title = title;
    this.titleNum = titleNum;
    this.playTime = playTime;
  }
}

function getClips(obj, title, count) {
  for (let i = 1; i < count + 1; i++) {
    obj[getID()] = new Clip(title, i, randomPlayTime());
  }
  return obj;
}

function showClips(obj) {
  console.log("--- VIDEO CLIPS ---");
  for (clip in obj) {
    console.log(
      `${obj[clip].title}${obj[clip].titleNum}(${clip}): ${obj[clip].playTime}`
    );
  }
}

const myClip = getClips(myVideoClips, TITLE, CLIPS);

//test
// showClips(myClip);

module.exports = { myClip, showClips };

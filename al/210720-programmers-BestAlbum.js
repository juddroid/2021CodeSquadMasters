// const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
// const plays = [500, 600, 150, 800, 2500];
// const genres = ['classic', 'pop', 'classic', 'pop', 'classic', 'classic'];
// const plays = [400, 600, 150, 600, 500, 500];

// const genres = ['A', 'A', 'B', 'A', 'B', 'B', 'A', 'A', 'A', 'A'];
// const plays = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const genres = ['classic'];
const plays = [10];

function solution(genres, plays) {
  let dic = {};
  for (let i = 0; i < genres.length; i++) {
    if (dic[genres[i]]) {
      dic[genres[i]].sum += plays[i];
      dic[genres[i]].list.push({ val: plays[i], idx: i });
    } else {
      dic[genres[i]] = { sum: plays[i], list: [{ val: plays[i], idx: i }] };
    }
  }
  console.log(dic);
  let sumList = [];
  for (const key in dic) {
    sumList.push({ genre: key, sum: dic[key].sum });
  }

  sumList.sort((a, b) => b.sum - a.sum);

  console.log(sumList);

  let album = [];

  for (let i = 0; i < sumList.length; i++) {
    let list = dic[sumList[i].genre].list.sort((a, b) => b.val - a.val);
    album.push(list[0].idx);
    list[1] && album.push(list[1].idx);
  }

  let result = album.map((el) => el && el);

  return result;
}

const result = solution(genres, plays);
console.log(result);

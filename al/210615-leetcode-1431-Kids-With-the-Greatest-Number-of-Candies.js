const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let result = candies.map((kid) => {
    return kid + extraCandies >= max ? true : false;
  });

  return result;
};

let result = kidsWithCandies(candies, extraCandies);
console.log(result);

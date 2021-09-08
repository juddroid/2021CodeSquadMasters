const n = 6;

function climbStairs(n) {
  if (n === 1) return 1;
  let dp = [];
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
}

let result = climbStairs(n);
console.log(result);

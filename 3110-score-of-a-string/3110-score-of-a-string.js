/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let answer = 0;

  function helper(str1, str2) {
    if (s.length <= 1) return answer;
    answer += Math.abs(str1.charCodeAt() - str2.charCodeAt());
    s = s.slice(1);
    return helper(s[0], s[1]);
  }

  helper(s[0], s[1]);
  return answer;
};

console.log(scoreOfString("hello")); // 13

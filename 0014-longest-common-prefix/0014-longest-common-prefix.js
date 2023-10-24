/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = '';
    let shortLength = Math.min(...strs.map((str) => str.length));
    let shortStr = strs[strs.findIndex((str) => str.length === shortLength)];

    for(let i = shortStr.length; i > 0; i--) {
        let targetStr = shortStr.slice(0, i);
        let check = strs.map((str) => str.startsWith(targetStr)).includes(false);
        if(check === false) {
            answer = targetStr;
            break;
        }
    }
    return answer
};
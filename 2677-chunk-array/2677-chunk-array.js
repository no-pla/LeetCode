/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let answer = [];
    while(true) {
        if(arr.length < size) {
            if(arr.length > 0) {
                answer.push(arr.slice(0, size));
            }
            break;
        } else {
            answer.push(arr.slice(0, size));
            arr = arr.slice(size);
        }
    }
    return answer;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort((a, b) => a - b); 
    if(arr.length % 2) {
        console.log(Math.ceil(arr.length / 2) - 1)
        return arr[Math.ceil(arr.length / 2) - 1];
    } else {
        let median = arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
        return (median[0] + median[1]) / 2;
    }
};


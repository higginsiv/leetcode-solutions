/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const isEven = totalLength % 2 === 0;
    const middleIndex = isEven ? totalLength / 2 : (totalLength - 1) / 2;

    let pointer1 = 0;
    let pointer2 = 0;
    let prev;
    let current;
    while (pointer1 + pointer2 < middleIndex + 1) {
        prev = current;
        if (pointer1 === nums1.length) {
            current = nums2[pointer2];
            pointer2++;
        } else if (pointer2 === nums2.length) {
            current = nums1[pointer1];
            pointer1++;
        } else if (nums1[pointer1] < nums2[pointer2]) {
            current = nums1[pointer1];
            pointer1++;
        } else {
            current = nums2[pointer2];
            pointer2++;
        }
    }

    return isEven ? (prev + current) / 2 : current;
};
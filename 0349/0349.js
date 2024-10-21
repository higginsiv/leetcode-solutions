/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // Annoyingly https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection doesn't exist on LC yet
    // return Array.from(new Set(nums1).intersection(new Set(nums2)));

    const intersection = new Set();
    const arrayToProcess = nums1.length < nums2.length ? nums1 : nums2;
    const otherArray = nums1.length < nums2.length ? nums2 : nums1;

    for (let i = 0; i < arrayToProcess.length; i++) {
        if (otherArray.includes(arrayToProcess[i])) {
            intersection.add(arrayToProcess[i]);
        }
    }
    return Array.from(intersection);
};

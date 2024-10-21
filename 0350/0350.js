/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const intersection = [];
    const primaryArray = nums1.length < nums2.length ? nums1 : nums2;
    const secondaryArray = nums1.length < nums2.length ? nums2 : nums1;

    while (primaryArray.length > 0) {
        const current = primaryArray.pop();
        while (
            secondaryArray.length > 0 &&
            secondaryArray[secondaryArray.length - 1] > current
        ) {
            secondaryArray.pop();
        }

        if (secondaryArray.length === 0) {
            break;
        }

        if (secondaryArray[secondaryArray.length - 1] === current) {
            intersection.push(current);
            secondaryArray.pop();
        }
    }
    return intersection;
};

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;

    let maxArea = 0;
    while (right > left) {
        let currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};
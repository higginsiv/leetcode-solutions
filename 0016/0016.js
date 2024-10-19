/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    let closest = Infinity;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        let localClosest = Infinity;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return sum;
            } 
            
            if (Math.abs(sum - target) < Math.abs(localClosest - target)) {
                localClosest = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        if (Math.abs(localClosest - target) < Math.abs(closest - target)) {
            closest = localClosest;
        }
    }

    return closest;
};

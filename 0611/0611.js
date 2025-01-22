/**
 * @param {number[]} nums
 * @return {number}
 */
const triangleNumber = function (nums) {
    nums.sort((a, b) => a - b);

    let answer = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] <= 0) {
            continue;
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] <= 0) {
                continue;
            }
            let low = j + 1;
            let high = nums.length - 1;
            const target = nums[i] + nums[j] - 1;

            while (low < high) {
                const middle = Math.floor((low + high) / 2);
                const current = nums[middle];

                if (current < target) {
                    low = middle + 1;
                } else if (current > target) {
                    high = middle - 1;
                } else if (current === target) {
                    high = middle;
                    break;
                }
            }
            while (nums[high] <= target) {
                high++;
            }
            high--;

            if (nums[high] <= target) {
                answer += high - j;
            }
        }
    }
    return answer;
};

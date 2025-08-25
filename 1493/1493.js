/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
    let preDelete = 0;
    let postDelete = 0;
    let deleteHappened = false;
    let globalDeleteHappened = false;

    let max = 0;
    let i = 0;

    while (i < nums.length) {
        console.log(i, preDelete, postDelete);
        const num = nums[i];
        if (num === 1) {
            if (deleteHappened) {
                postDelete++;
            } else {
                preDelete++;
            }
        } else {
            if (deleteHappened) {
                max = Math.max(max, preDelete + postDelete);
                preDelete = postDelete;
                postDelete = 0;
            } else {
                deleteHappened = true;
                globalDeleteHappened = true;
            }
        }

        i++;
    }

    if (globalDeleteHappened) {
        if (deleteHappened) {
            max = Math.max(max, preDelete + postDelete);
        } else {
            max = Math.max(max, preDelete);
        }
    } else {
        max = preDelete - 1;
    }

    return max;
};

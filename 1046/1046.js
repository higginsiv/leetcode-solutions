/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        const stone1 = stones.pop();
        const stone2 = stones.pop();
        const result = stone1 - stone2;
        if (result > 0) {
            stones.push(result);
        }
    }

    return stones[0] ?? 0;
};

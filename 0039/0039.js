/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    function findCombos(start, target, path) {
        if (target === 0) {
            result.push(path);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= target) {
                findCombos(i, target - candidates[i], [...path, candidates[i]]);
            }
        }
    }

    candidates.sort((a, b) => b - a);
    const result = [];
    findCombos(0, target, []);

    return result;
};
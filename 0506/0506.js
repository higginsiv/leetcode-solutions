/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function (score) {
    return score
        .map((x, i) => {
            return { score: x, index: i };
        })
        .sort((a, b) => b.score - a.score)
        .map((x, i) => {
            if (i === 0) {
                x.score = 'Gold Medal';
            } else if (i === 1) {
                x.score = 'Silver Medal';
            } else if (i === 2) {
                x.score = 'Bronze Medal';
            } else {
                x.score = `${i + 1}`;
            }
            return x;
        })
        .sort((a, b) => a.index - b.index)
        .map((x) => x.score);
};

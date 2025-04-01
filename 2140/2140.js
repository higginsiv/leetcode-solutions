/**
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints = function (questions) {
    const pointsAtIndex = new Map();

    return getMaxPoints(0);

    function getMaxPoints(index) {
        if (index >= questions.length) {
            return 0;
        }

        if (pointsAtIndex.has(index)) {
            return pointsAtIndex.get(index);
        }

        const skip = getMaxPoints(index + 1);

        const solve =
            questions[index][0] + getMaxPoints(index + questions[index][1] + 1);

        const result = Math.max(skip, solve);

        pointsAtIndex.set(index, result);

        return result;
    }
};

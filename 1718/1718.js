/**
 * @param {number} n
 * @return {number[]}
 */
const constructDistancedSequence = function (n) {
    const sequenceLength = n * 2 - 1;
    const sequence = Array(sequenceLength).fill(null);

    const remaining = Array.from({ length: n }, (_, i) => n - i);

    return findBest(sequence, remaining);

    function findBest(sequence, remaining) {
        if (remaining.length === 0) {
            return sequence;
        }

        let firstEmptyIndex = sequence.indexOf(null);

        for (let i = 0; i < remaining.length; i++) {
            const highest = remaining[i];
            if (
                (sequence[firstEmptyIndex + highest] == null &&
                    firstEmptyIndex + highest < sequenceLength) ||
                highest === 1
            ) {
                sequence[firstEmptyIndex] = highest;
                if (highest !== 1) {
                    sequence[firstEmptyIndex + highest] = highest;
                }

                remaining.splice(i, 1);

                const worked = findBest(sequence, remaining);

                if (worked !== false) {
                    return worked;
                }

                sequence[firstEmptyIndex] = null;
                if (highest !== 1) {
                    sequence[firstEmptyIndex + highest] = null;
                }
                remaining.splice(i, 0, highest);
            }
        }
        return false;
    }
};

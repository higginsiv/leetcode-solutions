/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function (s) {
    const partitions = [];
    let i = 0;

    while (i < s.length) {
        const startingLetter = s[i];
        let end = s.lastIndexOf(startingLetter);

        let start = i;
        while (i < end) {
            i += 1;
            const letter = s[i];
            const last = s.lastIndexOf(letter);
            if (last > end) {
                end = last;
            }
        }
        partitions.push(end + 1 - start);
        i = end + 1;
    }
    return partitions;
};

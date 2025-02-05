/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = function (s1, s2) {
    if (s1 === s2) {
        return true;
    }

    if (s1.length !== s2.length) {
        return false;
    }

    const s1Diff = [];
    const s2Diff = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            s1Diff.push(s1[i]);
            s2Diff.push(s2[i]);
            if (s1Diff.length > 2) {
                return false;
            }
        }
    }

    return (
        s1Diff.length === 2 && s1Diff[0] === s2Diff[1] && s1Diff[1] === s2Diff[0]
    );
};

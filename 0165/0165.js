/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
    version1 = version1.split('.').map(Number);
    version2 = version2.split('.').map(Number);

    const length = Math.max(version1.length, version2.length);

    for (let i = 0; i < length; i++) {
        const v1 = version1[i] ?? 0;
        const v2 = version2[i] ?? 0;

        if (v1 > v2) {
            return 1;
        } else if (v1 < v2) {
            return -1;
        }
    }
    return 0;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
    const binaryX = x.toString(2).split('').reverse();
    const binaryY = y.toString(2).split('').reverse();
    let hammingDistance = 0;

    let i = 0;
    while (binaryX[i] != null || binaryY[i] != null) {
        if ((binaryX[i] ?? 0) != (binaryY[i] ?? 0)) {
            hammingDistance++;
        }
        i++;
    }
    return hammingDistance;
};

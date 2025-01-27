/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const checkValid = function (matrix) {
    const n = matrix.length;
    const maskLength = 30;

    let tempN = n;
    const masks = [];

    while (tempN > maskLength) {
        masks.push((1 << maskLength) - 1);
        tempN -= maskLength;
    }
    if (tempN > 0) {
        masks.push((1 << tempN) - 1);
    }

    console.log(masks.map((mask) => mask.toString(2)));

    let rowMask = [0, 0, 0, 0];
    let colMask = [0, 0, 0, 0];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 4; j++) {
            rowMask[j] = 0;
            colMask[j] = 0;
        }

        for (let j = 0; j < n; j++) {
            const rowBitIndex = matrix[i][j] - 1;
            const colBitIndex = matrix[j][i] - 1;

            const rowMaskIndex = Math.floor(rowBitIndex / maskLength);
            const colMaskIndex = Math.floor(colBitIndex / maskLength);

            rowMask[rowMaskIndex] |= 1 << rowBitIndex % maskLength;
            colMask[colMaskIndex] |= 1 << colBitIndex % maskLength;
        }

        // Check if rowMask and colMask match the masks
        for (let k = 0; k < masks.length; k++) {
            if (rowMask[k] !== masks[k] || colMask[k] !== masks[k]) {
                return false;
            }
        }
    }

    return true;
};

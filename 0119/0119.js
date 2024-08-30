/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
    let pascal = Array.from({ length: rowIndex + 1 }).fill(1);
    for (let i = 0; i <= rowIndex; i++) {
        for (let j = i - 1; j > 0; j--) {
            pascal[j] = pascal[j] + pascal[j - 1];
        }
    }
    return pascal;
};

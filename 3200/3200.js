/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
const maxHeightOfTriangle = function (red, blue) {
    function findMax(top, bottom) {
        let row = 1;
        while (true) {
            if (top >= row) {
                top -= row;
                row++;
            } else {
                break;
            }

            if (bottom >= row) {
                bottom -= row;
                row++;
            } else {
                break;
            }
        }
        return row - 1;
    }
    return Math.max(findMax(red, blue), findMax(blue, red));
};

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const checkXMatrix = function (grid) {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (x === y || x === grid.length - 1 - y) {
                if (grid[y][x] === 0) {
                    return false;
                }
            } else if (grid[y][x] !== 0) {
                return false;
            }
        }
    }
    return true;
};

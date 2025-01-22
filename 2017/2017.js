/**
 * @param {number[][]} grid
 * @return {number}
 */
const gridGame = function (grid) {
    let lowestMax = Infinity;

    for (let i = 0; i < grid[0].length - 1; i++) {
        let topIndex = grid[0].length - i - 1;
        grid[0][topIndex - 1] = grid[0][topIndex] + grid[0][topIndex - 1];
        grid[1][i + 1] = grid[1][i] + grid[1][i + 1];
    }

    for (let i = 0; i < grid[0].length; i++) {
        lowestMax = Math.min(
            lowestMax,
            Math.max(grid[0][i + 1] ?? 0, grid[1][i - 1] ?? 0)
        );
    }
    return lowestMax;
};

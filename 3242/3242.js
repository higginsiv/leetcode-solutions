/**
 * @param {number[][]} grid
 */
class neighborSum {
    valueToIndex = new Map();
    grid;
    constructor(grid) {
        this.grid = grid;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                this.valueToIndex.set(grid[i][j], [i, j]);
            }
        }
    }
    /**
     * @param {number} value
     * @return {number}
     */
    adjacentSum(value) {
        const [x, y] = this.valueToIndex.get(value);
        let sum = 0;
        const neighbors = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        neighbors.forEach(([i, j]) => {
            const nX = x + i;
            const nY = y + j;
            if (
                nX < 0 ||
                nX >= this.grid.length ||
                nY < 0 ||
                nY >= this.grid[0].length
            ) {
                return;
            }
            sum += this.grid[nX][nY];
        });

        return sum;
    }
    /**
     * @param {number} value
     * @return {number}
     */
    diagonalSum(value) {
        const [x, y] = this.valueToIndex.get(value);
        let sum = 0;
        const neighbors = [
            [-1, -1],
            [1, 1],
            [1, -1],
            [-1, 1],
        ];
        neighbors.forEach(([i, j]) => {
            const nX = x + i;
            const nY = y + j;
            if (
                nX < 0 ||
                nX >= this.grid.length ||
                nY < 0 ||
                nY >= this.grid[0].length
            ) {
                return;
            }
            sum += this.grid[nX][nY];
        });

        return sum;
    }
}

/**
 * Your neighborSum object will be instantiated and called as such:
 * var obj = new neighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */

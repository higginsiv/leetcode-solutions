/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function (moves) {
    const grid = Array.from({ length: 3 }, () => Array(3).fill(null));

    for (let i = 0; i < moves.length; i++) {
        const [row, col] = moves[i];
        const turn = i % 2;
        grid[row][col] = turn;

        if (i >= 2) {
            if (
                (grid[0][0] !== null &&
                    grid[0][0] === grid[0][1] &&
                    grid[0][0] === grid[0][2]) ||
                (grid[1][0] !== null &&
                    grid[1][0] === grid[1][1] &&
                    grid[1][0] === grid[1][2]) ||
                (grid[2][0] !== null &&
                    grid[2][0] === grid[2][1] &&
                    grid[2][0] === grid[2][2]) ||
                (grid[0][0] !== null &&
                    grid[0][0] === grid[1][1] &&
                    grid[0][0] === grid[2][2]) ||
                (grid[0][2] !== null &&
                    grid[0][2] === grid[1][1] &&
                    grid[0][2] === grid[2][0]) ||
                (grid[0][0] !== null &&
                    grid[0][0] === grid[1][0] &&
                    grid[0][0] === grid[2][0]) ||
                (grid[0][1] !== null &&
                    grid[0][1] === grid[1][1] &&
                    grid[0][1] === grid[2][1]) ||
                (grid[0][2] !== null &&
                    grid[0][2] === grid[1][2] &&
                    grid[0][2] === grid[2][2])
            ) {
                return turn === 0 ? 'A' : 'B';
            }
        }
    }
    if (moves.length === 9) {
        return 'Draw';
    }
    return 'Pending';
};

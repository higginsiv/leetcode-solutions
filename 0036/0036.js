/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    function getBox(row, column) {
        return Math.floor(row / 3) * 3 + Math.floor(column / 3);
    }

    const rows = Array.from({ length: 9 }, () => new Set());
    const columns = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            const cell = board[row][column];
            if (cell === '.') {
                continue;
            }

            if (rows[row].has(cell)) {
                return false;
            }
            rows[row].add(cell);

            if (columns[column].has(cell)) {
                return false;
            }
            columns[column].add(cell);

            const box = getBox(row, column);
            if (boxes[box].has(cell)) {
                return false;
            }
            boxes[box].add(cell);
        }
    }

    return true;
}; 
/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = function (board) {
    let rookRow;
    let rookCol;
    let pawns = 0;

    outer: for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === 'R') {
                rookRow = i;
                rookCol = j;
                break outer;
            }
        }
    }

    [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ].forEach(([dx, dy]) => {
        let x = rookRow + dx;
        let y = rookCol + dy;
        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
            if (board[x][y] === 'p') {
                pawns++;
                break;
            } else if (board[x][y] === 'B') {
                break;
            }
            x += dx;
            y += dy;
        }
    });

    return pawns;
};

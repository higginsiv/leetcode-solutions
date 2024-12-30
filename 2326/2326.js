/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
const spiralMatrix = function (m, n, head) {
    const matrix = Array.from({ length: m }, () => Array(n).fill(-1));
    const [EAST, SOUTH, WEST, NORTH] = [0, 1, 2, 3];
    const DIRECTIONS = [EAST, SOUTH, WEST, NORTH];

    let row = 0;
    let col = 0;
    let dir = EAST;

    while (head != null) {
        matrix[row][col] = head.val;
        head = head.next;

        switch (dir) {
            case EAST:
                if (col === n - 1 || matrix[row][col + 1] !== -1) {
                    row++;
                    dir = SOUTH;
                } else {
                    col++;
                }
                break;
            case SOUTH:
                if (row === m - 1 || matrix[row + 1][col] !== -1) {
                    col--;
                    dir = WEST;
                } else {
                    row++;
                }
                break;
            case WEST:
                if (col === 0 || matrix[row][col - 1] !== -1) {
                    row = row - 1;
                    dir = NORTH;
                } else {
                    col--;
                }
                break;
            case NORTH:
                if (row === 0 || matrix[row - 1][col] !== -1) {
                    col++;
                    dir = EAST;
                } else {
                    row--;
                }
                break;
        }
    }
    return matrix;
};

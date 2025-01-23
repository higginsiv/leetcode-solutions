/**
 * @param {number[][]} grid
 * @return {number}
 */
const countServers = function (grid) {
    grid = grid.map((row) => {
        return row.map((cell) => {
            return {
                val: cell,
                counted: false,
            };
        });
    });

    let answer = 0;

    // Count Rows
    for (let row = 0; row < grid.length; row++) {
        let serversInRow = [];
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col].val === 1) {
                serversInRow.push(grid[row][col]);
            }
        }
        if (serversInRow.length > 1) {
            answer += serversInRow.length;
            serversInRow.forEach((server) => (server.counted = true));
        }
    }

    // Count Columns
    for (let col = 0; col < grid[0].length; col++) {
        let serversInCol = [];
        for (let row = 0; row < grid.length; row++) {
            if (grid[row][col].val > 0) {
                serversInCol.push(grid[row][col]);
            }
        }
        if (serversInCol.length > 1) {
            serversInCol.forEach((server) => {
                if (!server.counted) {
                    answer++;
                }
            });
        }
    }

    return answer;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
const largestIsland = function (grid) {
    const DIR = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    const islands = [];
    const water = [];

    // find all islands and water
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid.length; col++) {
            if (grid[row][col] === 1) {
                islands.push(flood(row, col));
            }
        }
    }

    if (islands.length === 0) {
        return 1;
    }

    if (water.length === 0) {
        return grid.length ** 2;
    }

    islands.sort((a, b) => b.length - a.length);

    let maxPossible = 1;
    for (let i = 0; i < 4; i++) {
        maxPossible += islands[i]?.length ?? 0;
    }

    // loop through water and see how many islands it is touching. add up the mass of all neighboring islands
    let bestFound = 0;
    for (const current of water) {
        const neighbors = DIR.map((direction) => {
            return {
                row: current.row + direction[0],
                col: current.col + direction[1],
            };
        });

        const currBiggest =
            islands.reduce((total, isle) => {
                if (
                    isle.some((point) => {
                        for (let i = 0; i < neighbors.length; i++) {
                            if (
                                point.row === neighbors[i].row &&
                                point.col === neighbors[i].col
                            ) {
                                return true;
                            }
                        }
                        return false;
                    })
                ) {
                    return total + isle.length;
                }

                return total;
            }, 0) + 1;

        bestFound = Math.max(bestFound, currBiggest);
        if (bestFound === maxPossible) {
            break;
        }
    }

    return bestFound;

    function flood(row, col) {
        const points = [];
        const queue = [{ row, col }];

        while (queue.length > 0) {
            const current = queue.pop();

            if (grid[current.row][current.col] === 2) {
                continue;
            }

            points.push(current);

            grid[current.row][current.col] = 2;

            for (let i = 0; i < DIR.length; i++) {
                const nRow = current.row + DIR[i][0];
                const nCol = current.col + DIR[i][1];

                if (
                    nRow < 0 ||
                    nRow >= grid.length ||
                    nCol < 0 ||
                    nCol >= grid.length
                ) {
                    continue;
                }

                if (grid[nRow][nCol] === 1) {
                    queue.push({ row: nRow, col: nCol });
                } else if (grid[nRow][nCol] === 0) {
                    water.push({ row: nRow, col: nCol });
                }
            }
        }

        return points;
    }
};

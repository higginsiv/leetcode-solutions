/**
 * @param {number[][]} grid
 * @return {number}
 */
const largestIsland = function (grid) {
    const EMPTY = 'e';
    const DIR = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    const islandGrid = Array.from({ length: grid.length }, () =>
        Array(grid[0].length).fill(EMPTY)
    );
    const islands = [];
    const water = [];

    // find all islands and water
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid.length; col++) {
            if (grid[row][col] === 1) {
                islands.push(flood(row, col, islands.length));
            }
        }
    }

    if (islands.length === 0) {
        return 1;
    }

    if (water.length === 0) {
        return grid.length ** 2;
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

        let currBiggest = 1;
        let islandsTouching = [];
        for (const neighbor of neighbors) {
            if (
                neighbor.row < 0 ||
                neighbor.row >= grid.length ||
                neighbor.col < 0 ||
                neighbor.col >= grid.length
            ) {
                continue;
            }
            if (islandGrid[neighbor.row][neighbor.col] !== EMPTY) {
                if (
                    !islandsTouching.includes(
                        islandGrid[neighbor.row][neighbor.col]
                    )
                ) {
                    currBiggest +=
                        islands[islandGrid[neighbor.row][neighbor.col]].length;
                    islandsTouching.push(
                        islandGrid[neighbor.row][neighbor.col]
                    );
                }
            }
        }

        bestFound = Math.max(bestFound, currBiggest);
    }

    return bestFound;

    function flood(row, col, islandId) {
        const points = [];
        const queue = [{ row, col }];

        while (queue.length > 0) {
            const current = queue.pop();

            if (grid[current.row][current.col] === 2) {
                continue;
            }

            islandGrid[current.row][current.col] = islandId;
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
                    grid[nRow][nCol] = 2;
                    water.push({ row: nRow, col: nCol });
                }
            }
        }

        return points;
    }
};

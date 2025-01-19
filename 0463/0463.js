/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
    let perimeter = 0;

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                directions.forEach(([dx, dy]) => {
                    const x = j + dx;
                    const y = i + dy;

                    if (
                        x < 0 ||
                        y < 0 ||
                        x >= grid[0].length ||
                        y >= grid.length ||
                        grid[y][x] === 0
                    ) {
                        perimeter++;
                    }
                });
            }
        }
    }

    return perimeter;
};

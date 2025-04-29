/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, color) {
    const neighbors = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    const originalColor = image[sr][sc];

    let queue = [{ row: sr, col: sc }];

    while (queue.length > 0) {
        const { row, col } = queue.pop();
        if (image[row][col] === color) {
            continue;
        } else {
            image[row][col] = color;
        }

        neighbors.forEach((neighbor) => {
            const newRow = row + neighbor[0];
            const newCol = col + neighbor[1];

            if (
                newRow < 0 ||
                newCol < 0 ||
                newRow >= image.length ||
                newCol >= image[0].length
            ) {
                return;
            }

            const neighborColor = image[newRow][newCol];
            if (neighborColor !== originalColor) {
                return;
            }
            queue.push({ row: newRow, col: newCol });
        });
    }
    return image;
};

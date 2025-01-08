/**
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = function (points) {
    let maxArea = -Infinity;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                const [x1, y1] = points[i];
                const [x2, y2] = points[j];
                const [x3, y3] = points[k];

                if (x1 === x2 && x2 === x3) {
                    continue;
                }

                if (y1 === y2 && y2 === y3) {
                    continue;
                }

                const area =
                    0.5 *
                    Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
                maxArea = maxArea > area ? maxArea : area;
            }
        }
    }
    return maxArea;
};

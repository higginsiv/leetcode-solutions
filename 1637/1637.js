/**
 * @param {number[][]} points
 * @return {number}
 */
const maxWidthOfVerticalArea = function(points) {
    let sortedPoints = points.map(point => point[0]).sort((a, b) => a - b);
    let max = 0;
    for (let i = 0; i < sortedPoints.length - 2; i++) {
        max = Math.max(max, sortedPoints[i + 1] - sortedPoints[i]);
    }
    return max;
};
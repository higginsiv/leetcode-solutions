/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const validSquare = function (p1, p2, p3, p4) {
    const points = [p1, p2, p3, p4];
    const epsilon = 1e-4; // Small tolerance value for floating-point comparison

    for (let i = 0; i < points.length; i++) {
        let distances = [];
        let slopes = [];
        for (let j = 0; j < points.length; j++) {
            if (i === j) {
                continue;
            }
            if (
                points[i][0] === points[j][0] &&
                points[i][1] === points[j][1]
            ) {
                return false;
            }
            distances.push(distance(points[i], points[j]));
            slopes.push(slope(points[i], points[j]));
        }
        distances.sort((a, b) => a - b);

        // For a valid square the three lines from any 1 point to the other 3 should form a right triangle
        if (
            distances[0] ** 2 + distances[1] ** 2 - distances[2] ** 2 >
            epsilon
        ) {
            return false;
        }

        if (
            !arePerpendicular(slopes[0], slopes[1]) &&
            !arePerpendicular(slopes[0], slopes[2]) &&
            !arePerpendicular(slopes[1], slopes[2])
        ) {
            return false;
        }
    }

    return true;
    function distance(p1, p2) {
        return Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
    }

    function slope(p1, p2) {
        return [p2[1] - p1[1], p2[0] - p1[0]];
    }

    function arePerpendicular(s1, s2) {
        return (
            (s1[0] === s2[1] && s1[1] === -1 * s2[0]) ||
            (s1[0] === -1 * s2[1] && s1[1] === s2[0])
        );
    }
};

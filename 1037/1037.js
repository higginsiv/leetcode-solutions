/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = function (points) {
    if (
        (points[0][0] === points[1][0] && points[0][1] === points[1][1]) ||
        (points[0][0] === points[2][0] && points[0][1] === points[2][1]) ||
        (points[1][0] === points[2][0] && points[1][1] === points[2][1])
    ) {
        return false;
    }

    const slope1x = points[1][0] - points[0][0];
    const slope1y = points[1][1] - points[0][1];
    const slope2x = points[2][0] - points[1][0];
    const slope2y = points[2][1] - points[1][1];

    if (slope1x === 0 && slope2x === 0) {
        return false;
    }

    if (slope1y / slope1x == slope2y / slope2x) {
        return false;
    }
    return true;
};

/**
 * @param {number[][]} arrays
 * @return {number}
 */
const maxDistance = function(arrays) {
    const [min, max] = arrays.reduce(([min, max], array, index) => {
        min.push({min: array[0], index});
        max.push({max: array[array.length - 1], index});
        return [min, max];
    }, [[], []]);
    min.sort((a, b) => a.min - b.min);
    max.sort((a, b) => b.max - a.max);

    if (min[0].index !== max[0].index) {
        return max[0].max - min[0].min;
    } else {
        return Math.max(max[0].max - min[1].min, max[1].max - min[0].min);
    }
};
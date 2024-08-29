/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = function (low, high) {
    const lowEven = low % 2 === 0;
    const highEven = high % 2 === 0;

    if (!lowEven && !highEven) {
        return Math.floor((high - low) / 2) + 1;
    }

    if (lowEven && highEven) {
        return Math.floor((high - low) / 2);
    }

    if (lowEven) {
        return Math.floor((high - 1) / 2) - Math.floor(low / 2) + 1;
    }
    
    if (highEven) {
        return Math.floor(high / 2) - Math.floor((low + 1) / 2) + 1;
    }
};

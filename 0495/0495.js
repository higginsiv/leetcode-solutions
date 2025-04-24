/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let poisonSeconds = duration;
    for (let i = 1; i < timeSeries.length; i++) {
        poisonSeconds += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
    }
    return poisonSeconds;
};

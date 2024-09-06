/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// TODO would constructing a new array be faster than many splices?
const insert = function (intervals, newInterval) {
    if (!intervals || intervals.length === 0) {
        return [newInterval];
    }
    const [newStart, newEnd] = newInterval;
    let high = intervals.length - 1;
    let low = 0;
    let mid;
    let insertionPoint;

    // find insertion point in array
    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        const [start, end] = intervals[mid];
        let nextStart;
        let nextEnd;

        if (intervals[mid + 1]) {
            [nextStart, nextEnd] = intervals [mid + 1];
        } 

        if (start <= newStart && ((nextStart > newStart) || (nextStart == null))) {
            mid = mid + 1;
            break;
        } else if (start <= newStart) {
            low = mid + 1;
        } else if (start >= newStart) {
            high = mid - 1;
        }
    }
    insertionPoint = mid;
    intervals.splice(insertionPoint, 0, newInterval);

    // Get all overlap to the right
    while (true) {
        if (insertionPoint === intervals.length - 1) {
            break;
        }

        let [currentStart, currentEnd] = intervals[insertionPoint];
        let [nextStart, nextEnd] = intervals[insertionPoint + 1];

        if (currentStart <= nextStart && currentEnd >= nextStart) {
            newInterval[1] = Math.max(newInterval[1], nextEnd);
            intervals.splice(insertionPoint + 1, 1);
        } else {
            break;
        }
    }

    // Get potential overlap to the left, which can at most be one element
    if (insertionPoint != 0) {
        let [priorStart, priorEnd] = intervals[insertionPoint - 1];
        if (newInterval[0] >= priorStart && newInterval[0] <= priorEnd) {
            newInterval[0] = priorStart;
            if (newInterval[1] >= priorStart && newInterval[1] <= priorEnd) {
                newInterval[1] = priorEnd
            }
            intervals.splice(insertionPoint - 1, 1);
        }
    }

    return intervals;
};
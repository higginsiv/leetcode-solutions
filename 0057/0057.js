/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
    const [newStart, newEnd] = newInterval;
    let high = intervals.length - 1;
    let low = 0;
    let mid;
    let insertionPoint;

    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        const [start, end] = intervals[mid];
        let nextStart;
        let nextEnd;

        if (intervals[mid + 1]) {
            [nextStart, nextEnd] = intervals [mid + 1];
        } 

        if (start <= newStart && ((nextStart > newStart) || (nextStart == null))) {
            console.log('golden')
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
    let merged = [];
    let i = insertionPoint - 1 >= 0 ? insertionPoint - 1 : 0;
    while (true) {
        if (i = intervals.length - 1) {
            break;
        }

        let [currentStart, currentEnd] = intervals[i];
        let [nextStart, nextEnd] = intervals[i + 1];

        // determine overlap
        if (currentStart <= nextStart && currentEnd >= nextStart) {
            // overlap
            if (!merged[0]) {
                merged[0] = currentStart;
            }
            i++;
        } else {
            break;
        }
    }

    console.log(mid);
    console.log(insertionPoint)
    console.log(intervals)
};

let intervals = [[1,3],[6,9]], newInterval = [2,5];
// let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8];
// let intervals = [[3,6]], newInterval = [2,5];

insert(intervals, newInterval);
// 1,3 4,5
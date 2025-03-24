/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
const countDays = function (days, meetings) {
    meetings.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }

        if (a[0] > b[0]) {
            return 1;
        }

        return a[1] - b[1];
    });

    let condensed = [meetings[0]];
    for (let i = 1; i < meetings.length; i++) {
        const [condStart, condEnd] = condensed[condensed.length - 1];
        const [start, end] = meetings[i];

        if (condStart <= start && condEnd >= end) {
            // Full overlap
            continue;
        }

        if (condEnd < start) {
            // No overlap
            condensed.push([start, end]);
            continue;
        }

        // Partial Overlap
        condensed[condensed.length - 1][1] = end;
    }

    return days - condensed.reduce((total, [start, end]) => {
        return total + (end - start) + 1;
    }, 0);
};

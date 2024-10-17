/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = function (n) {
    const weeks = Math.floor(n / 7);
    const leftover = n % 7;

    const mondays =
        sumFromNToM(1, weeks) + getLeftoverValue(1, leftover, weeks);
    const tuesdays =
        sumFromNToM(2, weeks + 1) + getLeftoverValue(2, leftover, weeks);
    const wednesdays =
        sumFromNToM(3, weeks + 2) + getLeftoverValue(3, leftover, weeks);
    const thursdays =
        sumFromNToM(4, weeks + 3) + getLeftoverValue(4, leftover, weeks);
    const fridays =
        sumFromNToM(5, weeks + 4) + getLeftoverValue(5, leftover, weeks);
    const saturdays =
        sumFromNToM(6, weeks + 5) + getLeftoverValue(6, leftover, weeks);
    const sundays = sumFromNToM(7, weeks + 6);

    return (
        mondays +
        tuesdays +
        wednesdays +
        thursdays +
        fridays +
        saturdays +
        sundays
    );

    function sumFromNToM(n, m) {
        if (m < n) {
            return 0;
        }
        return ((m - n + 1) * (n + m)) / 2;
    }

    function getLeftoverValue(dayIndex, leftover, weeks) {
        return dayIndex <= leftover ? dayIndex + weeks : 0;
    }
};

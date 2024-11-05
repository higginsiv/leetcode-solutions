/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
    let max = -Infinity;
    let min = Infinity;
    let sum = 0;
    salary.forEach((el) => {
        max = Math.max(max, el);
        min = Math.min(min, el);
        sum += el;
    });
    sum -= max + min;
    return sum / (salary.length - 2);
};

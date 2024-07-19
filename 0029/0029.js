/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
    let result = 0;
    if (divisor === 1) {
        result = dividend;
    } else if (divisor === -1) {
        result = -dividend;
    } else {
        let dividendPositive = true;
        let divisorPositive = true;
        if (dividend < 0) {
            dividendPositive = !dividendPositive;
            dividend = -dividend;
        }

        if (divisor < 0) {
            divisorPositive = !divisorPositive;
            divisor = -divisor;
        }

        let decrements = [{ value: divisor, weight: 1 }];
        while (decrements[decrements.length - 1].value <= dividend) {
            const { value, weight } = decrements[decrements.length - 1];
            decrements.push({
                value: value + value,
                weight: weight + weight,
            });
        }

        for (let i = decrements.length - 1; i >= 0; i--) {
            const { value, weight } = decrements[i];
            while (dividend >= value) {
                dividend -= value;
                result += weight;
            }
        }

        if (dividendPositive !== divisorPositive) {
            result = -result;
        }
    }

    if (result > 2147483647) {
        result = 2147483647;
    } else if (result < -2147483648) {
        result = -2147483648;
    }

    return result;
};

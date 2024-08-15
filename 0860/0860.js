/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
    const register = {
        5: 0,
        10: 0
    };

    for (let i = 0; i < bills.length; i++) {
        const difference = bills[i] - 5;
        if (bills[i] === 5) {
            register[5]++;
        } else if (bills[i] === 10) {
            if (register[5] === 0) {
                return false;
            }
            register[5]--;
            register[10]++;
        } else {
            if (register[10] > 0 && register[5] > 0) {
                register[10]--;
                register[5]--;
            } else if (register[5] >= 3) {
                register[5] -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
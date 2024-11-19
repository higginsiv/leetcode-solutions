/**
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = function (operations) {
    const record = [];
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'C':
                record.pop();
                break;
            case 'D':
                record.push(record[record.length - 1] * 2);
                break;
            case '+':
                record.push(
                    record[record.length - 1] + record[record.length - 2]
                );
                break;
            default:
                record.push(parseInt(operations[i]));
                break;
        }
    }

    return record.reduce((total, curr) => total + curr, 0);
};

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
    let answer = '1';
    for (let i = 0; i < n - 1; i++) {
        answer = answer
            .match(/(\d)\1{0,}/g)
            .map((x) => x.length + x[0])
            .join('');
    }
    return answer;
};


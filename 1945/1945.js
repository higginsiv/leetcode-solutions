/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = function (s, k) {
    const delta = 'a'.charCodeAt(0);
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        let letterNum = s.charCodeAt(i) - delta + 1;
        while (letterNum > 0) {
            num += letterNum % 10;
            letterNum = Math.floor(letterNum / 10);
        }
    }

    for (let j = 0; j < k - 1; j++) {
        let val = num;
        num = 0;
        while (val > 0) {
            num += val % 10;
            val = Math.floor(val / 10);
        }
    }

    return num;
};

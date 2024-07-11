/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    let stack = [];
    let symbols = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        if (symbols[s[i]]) {
            stack.push(s[i]);
        } else {
            if (symbols[stack.pop()] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
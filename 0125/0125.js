/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    function isAlphanumeric(char) {
        return /[a-zA-Z0-9]/.test(char);
    }

    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

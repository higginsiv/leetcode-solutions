/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    let start = 0;
    let left = 0;
    let right = 0;
    let longest = '';

    while (start < s.length) {
        // handle odd length
        ({left, right} = buildPalindrome(s, start, start));
        updateLongest(left, right);

        // handle even length
        ({left, right} = buildPalindrome(s, start, start + 1));
        updateLongest(left, right);
        
        start++;
    }
    return longest;

    function buildPalindrome(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return {left: left + 1, right: right - 1};
    }

    function updateLongest(left, right) {
        if (right - left + 1 > longest.length) {
            longest = s.substring(left, right + 1);
        }
    }
};
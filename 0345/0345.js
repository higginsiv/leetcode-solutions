/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
    const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

    s = s.split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (!vowels.includes(s[left]) && left < right) {
            left++;
        }

        while (!vowels.includes(s[right]) && left < right) {
            right--;
        }

        if (left >= right) {
            break;
        }

        const temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        left++;
        right--;
    }

    return s.join('');
};

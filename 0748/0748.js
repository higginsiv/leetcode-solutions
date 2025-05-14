/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = function (licensePlate, words) {
    licensePlate = licensePlate.toLocaleLowerCase().match(/[a-zA-Z]/g) || [];
    licensePlate.sort();

    words.sort((a, b) => a.length - b.length);
    for (let i = 0; i < words.length; i++) {
        const letters = words[i].split('');
        letters.sort();
        let passes = true;
        let k = 0;

        for (let j = 0; j < licensePlate.length; j++) {
            while (letters[k] < licensePlate[j]) {
                k++;
            }
            if (letters[k] !== licensePlate[j]) {
                passes = false;
                break;
            }
            k++;
        }
        if (passes) {
            return words[i];
        }
    }
};

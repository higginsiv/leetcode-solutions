/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const top = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const middle = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const bottom = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

    const rows = [top, middle, bottom];

    const response = [];

    for (let i = 0; i < words.length; i++) {
        const comparison = words[i].toLowerCase();
        for (let j = 0; j < rows.length; j++) {
            const row = rows[j];
            let broken = false;
            for (let k = 0; k < comparison.length; k++) {
                if (!row.includes(comparison[k])) {
                    broken = true;
                    break;
                }
            }
            if (!broken) {
                response.push(words[i]);
                break;
            }
        }
    }
    return response;
};

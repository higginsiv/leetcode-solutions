/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function (name, typed) {
    let nameIndex = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === name[nameIndex]) {
            nameIndex++;
            continue;
        } else if (typed[i] === name[nameIndex - 1]) {
            continue;
        }
        return false;
    }
    return nameIndex === name.length;
};

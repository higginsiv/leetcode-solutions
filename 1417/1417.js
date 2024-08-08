/**
 * @param {string} s
 * @return {string}
 */
const reformat = function(s) {
    function isAlpha(char) {
        return char >= 'a' && char <= 'z';
    }

    let alphaStack = [];
    let numStack = [];
    let reformatted = [];

    for (let i = 0; i < s.length; i++) {
        if (isAlpha(s[i])) {
            alphaStack.push(s[i]);
        } else {
            numStack.push(s[i]);
        }
    }

    if (Math.abs(alphaStack.length - numStack.length) > 1) {
        return '';
    }

    let stacks = alphaStack.length > numStack.length ? [alphaStack, numStack] : [numStack, alphaStack];
    let activeStack = 0;

    while (alphaStack.length > 0 || numStack.length > 0) {
        let stack = stacks[activeStack];
        if (stack.length > 0) {
            reformatted.push(stack.pop());
        }
        activeStack = 1 - activeStack;
    }

    return reformatted.join('');
};
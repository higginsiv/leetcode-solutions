/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function (moves) {
    let up = 0;
    let down = 0;
    let left = 0;
    let right = 0;

    for (let i = 0; i < moves.length; i++) {
        const char = moves[i];

        switch (char) {
            case 'U':
                up++;
                break;
            case 'D':
                down++;
                break;
            case 'L':
                left++;
                break;
            case 'R':
                right++;
                break;
        }
    }
    return up === down && left === right;
};

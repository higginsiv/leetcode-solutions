/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
    let answer = Array.from({ length: n }, (_, i) => (i + 1).toString());
    let pointer = 3;
    while (pointer <= n) {
        answer[pointer - 1] = 'Fizz';
        pointer += 3;
    }

    pointer = 5;
    while (pointer <= n) {
        if (pointer % 3 === 0) {
            answer[pointer - 1] = 'FizzBuzz';
        } else {
            answer[pointer - 1] = 'Buzz';
        }
        pointer += 5;
    }

    return answer;
};

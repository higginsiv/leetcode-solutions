/**
 * @param {number[]} answers
 * @return {number}
 */
const numRabbits = function (answers) {
    const answersToCount = new Map();
    for (let i = 0; i < answers.length; i++) {
        answersToCount.set(
            answers[i],
            (answersToCount.get(answers[i]) ?? 0) + 1
        );
    }

    let minRabbits = 0;

    answersToCount.forEach((count, answer) => {
        const groups = Math.floor(count / (answer + 1));
        const groupedUp = groups * (answer + 1);
        const leftover = count - groupedUp;

        minRabbits += count;

        if (leftover > 0) {
            minRabbits += answer + 1 - leftover;
        }
    });

    return minRabbits;
};

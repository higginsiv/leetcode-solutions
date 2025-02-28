/**
 * @return {Generator<number>}
 */
const fibGenerator = function* () {
    yield 0;
    yield 1;

    let twoBack = 0;
    let oneBack = 1;
    let current;

    while (true) {
        current = twoBack + oneBack;
        twoBack = oneBack;
        oneBack = current;
        yield current;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

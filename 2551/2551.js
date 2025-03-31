/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
const putMarbles = function (weights, k) {
    const partitions = weights.map((el, index) => {
        return weights[index - 1] ?? 0 + weights[index];
    });

    const first = partitions.shift();
    const last = weights[weights.length - 1]
    console.log(partitions)
    partitions.sort((a, b) => b - a);

    const numberOfPartitions = k - 1;

    let difference = 0;
    for (let i = 0; i < numberOfPartitions; i++) {
        difference += partitions[i];
        difference -= partitions[partitions.length - 1 - i];
    }
    return difference + first - last;
};

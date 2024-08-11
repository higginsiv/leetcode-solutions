/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
const winningPlayerCount = function (n, pick) {
    const players = new Map();
    pick.forEach(([player, pick]) => {
        if (!players.has(player)) {
            players.set(player, new Map());
        }
        if (!players.get(player).has(pick)) {
            players.get(player).set(pick, 0);
        }
        players.get(player).set(pick, players.get(player).get(pick) + 1);
    });

    let wins = 0;
    for (let i = 0; i < n; i++) {
        let playerPicks = players.get(i);
        if (!playerPicks) {
            continue;
        }

        let playerWon = [...playerPicks.keys()].some((pick) => {
            let count = playerPicks.get(pick) || 0;
            return count > i;
        });
        if (playerWon) {
            wins++;
        }
    }

    return wins;
};

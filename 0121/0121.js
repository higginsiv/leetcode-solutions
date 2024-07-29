/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let profit = 0;

    // convert array to array of stock price changes after one day
    for (let i = 0; i < prices.length - 1; i++) {
        prices[i] = prices[i + 1] - prices[i];
    }
    prices[prices.length - 1] = 0;

    // complete maximum sub array problem to find the maximum profit
    for (let i = 0; i < prices.length; i++) {
        prices[i] = Math.max(prices[i] + (prices[i - 1] ?? 0), prices[i]);
        profit = Math.max(profit, prices[i]);
    }
    return profit;
};
/**
 * @param {string[]} details
 * @return {number}
 */
const countSeniors = function(details) {
    return details.filter(detail => {
        const age = parseInt(detail.slice(11, 13));
        return age > 60;
    }).length;
};
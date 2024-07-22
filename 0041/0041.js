/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
   const length = nums.length;
   for (let i = 1; i <= length; i++) {
       if (!nums.includes(i)) {
           return i;
       }
   }
   return length + 1;
};
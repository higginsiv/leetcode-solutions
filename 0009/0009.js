/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
   if (x < 0) {
       return false;
   }
   let reversed = 0;
   let original = x;

   while (original > 0) {
       reversed = reversed * 10 + original % 10;
       original = Math.floor(original / 10);
   }
   return x === reversed;
};
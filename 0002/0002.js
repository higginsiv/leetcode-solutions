/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    class ListNode {
        val;
        next;
        constructor(val = 0, next = null) {
            this.val = val;
            this.next = next;
        }
    }

    let result = new ListNode();
    let current = result;
    let carry = 0;
    while (l1 || l2 || carry) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        carry = sum > 9 ? Math.floor(sum / 10) : 0;
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return result.next;
};
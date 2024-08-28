/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
    let current = head;
    let prev = null;
    let temp = null;
    while (current !== null && current.next !== null) {
        temp = current.next;
        current.next = temp.next;
        temp.next = current;
        if (prev === null) {
            head = temp;
        } else {
            prev.next = temp;
        }
        prev = current;
        current = current.next;
    }
    return head;
};

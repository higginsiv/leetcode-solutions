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
const reverseList = function (head) {
    if (!head) {
        return head;
    }
    let stack = [];
    let current = head;
    while (current != null) {
        stack.push(current);
        current = current.next;
    }

    let reversedHead = stack.pop();
    let reverseCurrent = reversedHead;
    while (stack.length > 0) {
        reverseCurrent.next = stack.pop();
        reverseCurrent = reverseCurrent.next;
        reverseCurrent.next = null;
    }
    return reversedHead;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
    let current = headA;

    while (current != null) {
        current.isVisited = true;
        current = current.next;
    }

    current = headB;
    while (current != null) {
        if (current.isVisited) {
            return current;
        }
        current.isVisited = true;
        current = current.next;
    }

    return null;
};

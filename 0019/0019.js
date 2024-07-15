/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    class ListNode {
        constructor(val = 0, next = null) {
            this.val = val;
            this.next = next;
        }
    }
    
    function traverse(node, n) {
        if (!node) {
            return 0;
        }
        
        const next = traverse(node.next, n);
        if (next === n) {
            node.next = node.next.next;
        }
        
        return next + 1;
    }
    
    const temp = new ListNode(0, head);
    traverse(temp, n);
    return temp.next;
};
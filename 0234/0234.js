/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
    let slow = head;
    let fast = head;

    while (fast != null) {
        fast = fast.next;
        if (fast !== null) {
            fast = fast.next;
        }

        if (fast != null) {
            slow = slow.next;
        }
    }

    let current = slow.next;
    let reverseHead = null;
    let next;

    if (current == null) {
        return true;
    }
    do {
        next = current.next;
        current.next = reverseHead;
        reverseHead = current;
        current = next;
    } while (next != null);

    let palindrome = true;
    while (reverseHead != null) {
        if (reverseHead.val != head.val) {
            palindrome = false;
            break;
        }
        reverseHead = reverseHead.next;
        head = head.next;
    }
    return palindrome;
};

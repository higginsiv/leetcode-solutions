/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    class ListNode {
        constructor(val = 0, next = null) {
            this.val = val;
            this.next = next;
        }
    }

    function mergeTwoLists(list1, list2) {
        const start = new ListNode();
        let current = start;

        while (list1 !== null || list2 !== null) {
            if (list1 === null) {
                current.next = list2;
                break;
            }
            if (list2 === null) {
                current.next = list1;
                break;
            }
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        return start.next;
    }

    if (lists.length === 0) {
        return null;
    }
    let merged = lists[0];
    for (let i = 1; i < lists.length; i++) {
        merged = mergeTwoLists(merged, lists[i]);
    }
    return merged;
};

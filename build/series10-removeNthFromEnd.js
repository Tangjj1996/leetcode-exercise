"use strict";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *  val: number
 *  next: ListNode | null
 *  constructor(val?: number, next?: ListNode | null) {
 *    this.val = (val === undefined ? 0 : val)
 *    this.next = (next === undefined ? null : next)
 *  }
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNthFromEnd = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function removeNthFromEnd(head, n) {
    return null;
}
exports.removeNthFromEnd = removeNthFromEnd;
var head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
}, n = 2;
var res = removeNthFromEnd(head, n);
// console.log(res)
var reverseList = function (head) {
    var pre = null;
    for (var cur = head; cur;) {
        var nextTemp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextTemp;
    }
    return pre;
};
reverseList(head);
console.log('this is the head:::====>', head);
//# sourceMappingURL=series10-removeNthFromEnd.js.map
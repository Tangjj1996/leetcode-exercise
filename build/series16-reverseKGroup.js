"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseKGroup = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
function reverseKGroup(head, k) {
    return null;
}
exports.reverseKGroup = reverseKGroup;
/**
 * 翻转node链表
 * @param node
 */
function reverse(node) {
    var pre = null, cur = node, next = null;
    while (cur !== null) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}
var list = {
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
};
var res = reverseKGroup(list, 3);
console.log(res);
//# sourceMappingURL=series16-reverseKGroup.js.map
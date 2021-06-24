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
    var _a;
    var first = head; // 快指针
    for (var i = 0; i < n; i++) {
        first = first === null || first === void 0 ? void 0 : first.next;
    }
    if (!first)
        return head === null || head === void 0 ? void 0 : head.next; // 如果n+1大于链表长度 返回头结点
    var second = head; // 慢指针
    while (first.next) {
        first = first === null || first === void 0 ? void 0 : first.next;
        second = second === null || second === void 0 ? void 0 : second.next;
    }
    second.next = (_a = second === null || second === void 0 ? void 0 : second.next) === null || _a === void 0 ? void 0 : _a.next; // 让慢指针指向后面的后一个节点（删除后一个节点）
    return head;
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
console.log(res);
//# sourceMappingURL=series10-removeNthFromEnd.js.map
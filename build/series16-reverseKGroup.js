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
    return connectK(head, k);
}
exports.reverseKGroup = reverseKGroup;
function connectK(head, k) {
    if (head === null) {
        return null;
    }
    if (k === 1) {
        return head;
    }
    var length = 0;
    var headPointer = head;
    while (headPointer.next) {
        length++;
        headPointer = headPointer.next;
    }
    if (length < k) {
        return head;
    }
    var left = head;
    var mid = head.next;
    var right;
    var pointer = head; // pointer指针指向head链表
    for (var i = 0; i < k; i++) {
        mid.next = pointer;
        pointer = pointer.next;
    }
    right = pointer.next; // 指向尾节点
    left.next = connectK(right, k);
    return mid;
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
var res = connectK(list, 3);
console.log(res);
//# sourceMappingURL=series16-reverseKGroup.js.map
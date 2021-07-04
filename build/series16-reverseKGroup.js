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
    return dfs(head, listLenth(head), k);
}
exports.reverseKGroup = reverseKGroup;
/**
 * 递归操作
 * @param head
 * @param len
 * @param k
 * @returns
 */
function dfs(head, len, k) {
    if (len < k) {
        return head;
    }
    var tail = head, prev = null, temp = null;
    for (var i = 0; i < k; i++) {
        temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    tail.next = dfs(head, len - k, k);
    return prev;
}
/**
 * 获取链表的长度
 * @param {ListNode | null} head
 * @returns {number}
 */
function listLenth(head) {
    var len = 0;
    while (head !== null) {
        head = head.next;
        len++;
    }
    return len;
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
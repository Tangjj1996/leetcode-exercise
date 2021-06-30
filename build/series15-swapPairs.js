"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapPairs = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
function swapPairs(head) {
    return connect(head);
}
exports.swapPairs = swapPairs;
function connect(node) {
    if (!node) {
        return null;
    }
    var left = node;
    var mid = node.next;
    var right = mid === null || mid === void 0 ? void 0 : mid.next;
    if (!mid) {
        return left;
    }
    mid.next = left;
    left.next = connect(right);
    return mid;
}
var head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null,
        },
    },
};
var res = swapPairs(head);
console.log(res);
//# sourceMappingURL=series15-swapPairs.js.map
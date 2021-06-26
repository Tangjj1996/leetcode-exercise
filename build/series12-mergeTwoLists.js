"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTwoLists = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
function mergeTwoLists(l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
exports.mergeTwoLists = mergeTwoLists;
var list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null,
        },
    },
};
var list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null,
        },
    },
};
var res = mergeTwoLists(list1, list2);
console.log(res);
//# sourceMappingURL=series12-mergeTwoLists.js.map
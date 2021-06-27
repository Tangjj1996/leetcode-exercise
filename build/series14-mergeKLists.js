"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeKLists = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
var util_1 = __importDefault(require("util"));
function mergeKLists(lists) {
    var result = null;
    if (lists.length === 0) {
        return result;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    for (var i = 0, len = lists.length; i < len; i++) {
        result = mergeTwoLists(result, lists[i]);
    }
    return result;
}
exports.mergeKLists = mergeKLists;
function mergeTwoLists(l1, l2) {
    var pre = {
        val: -1,
        next: null,
    };
    var tail = pre;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        }
        else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if (!l1) {
        tail.next = l2;
    }
    if (!l2) {
        tail.next = l1;
    }
    return pre.next;
}
var lists = [
    {
        val: 1,
        next: {
            val: 2,
            next: null,
        },
    },
    {
        val: 3,
        next: null,
    },
    {
        val: 4,
        next: null,
    },
    {
        val: 1,
        next: null,
    },
];
var res = mergeTwoLists(lists[0], lists[1]);
console.log(util_1.default.inspect(res, { showHidden: false, depth: null }), '\n---------------\n', util_1.default.inspect(lists, { showHidden: false, depth: null }));
//# sourceMappingURL=series14-mergeKLists.js.map
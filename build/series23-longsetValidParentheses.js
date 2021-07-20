"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestValidParentheses = void 0;
function longestValidParentheses(s) {
    var n = s.length;
    if (n < 2)
        return 0;
    for (var i = n % 2 === 0 ? n : n - 1; i > 0; i - 2) {
        for (var j = 0; j < n - i + 1; j++) {
            if (isValid(s.substring(j, j + i))) {
                return i;
            }
        }
    }
    return 0;
}
exports.longestValidParentheses = longestValidParentheses;
function isValid(x) {
    var stack = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] === '(') {
            stack.push('(');
        }
        else if (stack.length && stack[stack.length - 1] === '(') {
            stack.pop();
        }
        else {
            return false;
        }
    }
    return stack.length === 0;
}
var s = ')()())';
var res = longestValidParentheses(s);
console.log(res);
//# sourceMappingURL=series23-longsetValidParentheses.js.map
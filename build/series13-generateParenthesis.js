"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateParenthesis = void 0;
function generateParenthesis(n) {
    var result = [];
    dfs(0, 0, n, '', result);
    return result;
}
exports.generateParenthesis = generateParenthesis;
function dfs(left, right, n, s, result) {
    if (s.length === n * 2) {
        result.push(s);
        return;
    }
    // 如果左括号小于n，则可以继续添加左括号
    if (left < n) {
        dfs(left + 1, right, n, s + '(', result);
    }
    // 如果右括号小于左括号，则可以继续添加右括号
    if (right < left) {
        dfs(left, right + 1, n, s + ')', result);
    }
}
var res = generateParenthesis(3);
console.log(res);
//# sourceMappingURL=series13-generateParenthesis.js.map
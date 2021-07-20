"use strict";
/**
 * 暴力解法
 * @param s string类型
 * @returns 返回值为number
 */
// export function longestValidParentheses(s: string): number {
//   const n = s.length
//   if (n < 2) return 0
//   for (let i = n % 2 === 0 ? n : n - 1; i > 0; ) {
//     for (let j = 0; j < n - i + 1; j++) {
//       if (isValid(s.substring(j, j + i))) {
//         return i
//       }
//     }
//     i -= 2
//   }
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestValidParentheses = void 0;
//   return 0
// }
// function isValid(x: string) {
//   const stack: string[] = []
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] === '(') {
//       stack.push('(')
//     } else if (stack.length && stack[stack.length - 1] === '(') {
//       stack.pop()
//     } else {
//       return false
//     }
//   }
//   return stack.length === 0
// }
/**
 * 动态规划
 * @param s string类型
 * @returns 返回值为number
 */
function longestValidParentheses(s) {
    var n = s.length;
    if (n === 0)
        return 0;
    var dp = Array.from(new Array(n), function () { return 0; });
    for (var i = 0; i < n; i++) {
        // i-dp[i-1]-1是与当前")"对称的位置
        if (s[i] === ')' &&
            i - dp[i - 1] - 1 >= 0 &&
            s[i - dp[i - 1] - 1] === '(') {
            dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2;
        }
    }
    return Math.max.apply(Math, dp);
}
exports.longestValidParentheses = longestValidParentheses;
var s = '()';
var res = longestValidParentheses(s);
console.log(res);
//# sourceMappingURL=series23-longsetValidParentheses.js.map
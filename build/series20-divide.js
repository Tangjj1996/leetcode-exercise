"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = void 0;
function divide(dividend, divisor) {
    var flag = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    var q = 0, times = 0;
    while (dividend >= divisor) {
        var cur = dividend - (divisor << times);
        if (cur >= 0) {
            q += 1 << times;
            times++;
            dividend = cur;
        }
        else {
            times--;
        }
    }
    return Math.max(Math.pow((-2), 31), Math.min(q * flag, Math.pow(2, 31)));
}
exports.divide = divide;
var dividend = 10000, divisor = -3;
var res = divide(dividend, divisor);
console.log(res);
//# sourceMappingURL=series20-divide.js.map
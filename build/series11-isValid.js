"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
function isValid(s) {
    var leftFlag = ['(', '[', '{'], rigthFlag = [')', ']', '}'];
    var stack = [];
    var _loop_1 = function (i, len) {
        if (leftFlag.includes(s[i])) {
            stack.push(s[i]);
        }
        else if (rigthFlag.includes(s[i])) {
            var index = rigthFlag.findIndex(function (item) { return item === s[i]; });
            var aIndex = -1;
            for (var aIn = stack.length - 1; aIn >= 0; aIn--) {
                if (stack[aIn] === leftFlag[index]) {
                    aIndex = aIn;
                    break;
                }
            }
            if (aIndex === -1 || aIndex !== stack.length - 1) {
                return { value: false };
            }
            stack.splice(aIndex, 1);
        }
    };
    for (var i = 0, len = s.length; i < len; i++) {
        var state_1 = _loop_1(i, len);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return stack.length === 0;
}
exports.isValid = isValid;
var s = '[[[]]]';
var res = isValid(s);
console.log(res);
//# sourceMappingURL=series11-isValid.js.map
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
            var index_1 = rigthFlag.findIndex(function (item) { return item === s[i]; });
            var aIndex = stack.findIndex(function (item) { return item === leftFlag[index_1]; });
            aIndex !== -1 && stack.splice(aIndex, 1);
        }
    };
    for (var i = 0, len = s.length; i < len; i++) {
        _loop_1(i, len);
    }
    return stack.length === 0;
}
exports.isValid = isValid;
var s = '([)]';
var res = isValid(s);
console.log(res);
//# sourceMappingURL=series11-isValid.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strStr = void 0;
function strStr(hayStack, needle) {
    var hayLen = hayStack.length, needleLen = needle.length;
    if ((hayStack === '' || hayLen < needleLen) && needle !== '')
        return -1;
    if (needle === '')
        return 0;
    for (var i = 0; i < hayLen; i++) {
        if (hayStack[i] === needle[0]) {
            var j = 0;
            while (i + j < hayLen && j < needleLen && hayStack[i + j] === needle[j]) {
                j++;
            }
            if (j === needleLen) {
                return i;
            }
        }
    }
    return -1;
}
exports.strStr = strStr;
var hayStack = 'aaaaa', needle = 'bba';
var res = strStr(hayStack, needle);
console.log(res);
//# sourceMappingURL=series19-strStr.js.map
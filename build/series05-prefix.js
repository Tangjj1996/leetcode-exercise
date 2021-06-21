"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestCommonPrefix = void 0;
function longestCommonPrefix(strs) {
    if (strs.length < 1)
        return '';
    if (strs.length === 1)
        return strs[0];
    var first = strs[0].length, prefix = strs[0] ? strs[0][0] : '';
    var sLen = strs[0].length;
    while (--first) {
        for (var i = 1, len = strs.length; i < len; i++) {
            if (strs[i].indexOf(prefix) === -1)
                return prefix.slice(0, -1);
        }
        prefix += strs[0][sLen - first];
    }
    return prefix;
}
exports.longestCommonPrefix = longestCommonPrefix;
var arr = ['', ''];
var res = longestCommonPrefix(arr);
console.log(res);
//# sourceMappingURL=series05-prefix.js.map
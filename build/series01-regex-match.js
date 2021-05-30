"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMatch = void 0;
function isMatch(s, p) {
    if (p.indexOf('*') === -1) {
        return p.length === s.length;
    }
    return new RegExp(p).test(s);
}
exports.isMatch = isMatch;
console.log(isMatch("mississippi", "mis*is*p*."));
//# sourceMappingURL=series01-regex-match.js.map
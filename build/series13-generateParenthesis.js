"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateParenthesis = void 0;
function generateParenthesis(n) {
    var i = 0;
    var arr = [];
    while (arr[0].length < n) {
        if (arr.length === 0) {
            arr.push('c');
        }
    }
    return arr;
}
exports.generateParenthesis = generateParenthesis;
//# sourceMappingURL=series13-generateParenthesis.js.map
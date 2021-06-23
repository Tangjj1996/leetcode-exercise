"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.letterCombinations = void 0;
function letterCombinations(digits) {
    if (!digits)
        return [];
    var letterMap = new Map([
        [2, ['a', 'b', 'c']],
        [3, ['d', 'e', 'f']],
        [4, ['g', 'h', 'i']],
        [5, ['j', 'k', 'l']],
        [6, ['m', 'n', 'o']],
        [7, ['p', 'q', 'r', 's']],
        [8, ['t', 'u', 'v']],
        [9, ['w', 'x', 'y', 'z']],
    ]);
    var arr = [];
    for (var i = 0, len = digits.length; i < len; i++) {
        var innerArr = letterMap.get(Number(digits.charAt(i)));
        var jArr = [];
        for (var j = 0, jLen = innerArr.length; j < jLen; j++) {
            if (i === 0) {
                arr = innerArr;
                break;
            }
            for (var k = 0, kLen = arr.length; k < kLen; k++) {
                var str = arr[k] + innerArr[j];
                jArr.push(str);
            }
        }
        jArr.length && (arr = jArr);
    }
    return arr;
}
exports.letterCombinations = letterCombinations;
var digits = '2';
var res = letterCombinations(digits);
console.log(res);
//# sourceMappingURL=series08-letterCombinations.js.map
"use strict";
function leeterCombinations(digits) {
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
        if (i === 0) {
            // 第一次先放到里边
            arr = innerArr;
        }
        var jArr = [];
        for (var j = 0, jLen = innerArr.length; j < jLen; j++) {
            for (var k = 0, kLen = arr.length; k < kLen; k++) {
                var str = arr[k] + innerArr[j];
                jArr.push(str);
            }
        }
        jArr.length && (arr = jArr);
    }
    return arr;
}
var digits = '23';
var res = leeterCombinations(digits);
console.log(res);
//# sourceMappingURL=series08-letterCombinations.js.map
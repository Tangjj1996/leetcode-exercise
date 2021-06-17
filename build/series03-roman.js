"use strict";
function intToRoman(num) {
    var romanMap = new Map([
        [0, 'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M']
    ]);
    var res = '';
    var len = String(num).length;
    while (len--) {
        // 一位数
        if (len === 0) {
            if (num < 4) {
                while (num--) {
                    res += romanMap.get(0);
                }
            }
            else if (num === 4) {
                res = romanMap.get(0) + romanMap.get(5);
            }
            else if (num < 9) {
                res = romanMap.get(5);
                while (num-- > 5) {
                    res += romanMap.get(0);
                }
            }
            else {
                res = romanMap.get(0) + romanMap.get(10);
            }
        }
    }
    return res;
}
;
var result = intToRoman(8);
console.log(result);
//# sourceMappingURL=series03-roman.js.map
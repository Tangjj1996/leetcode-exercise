"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intToRoman = void 0;
function intToRoman(num) {
    var roman = [
        {
            head: 'I',
            next: 'V',
        },
        {
            head: 'X',
            next: 'L',
        },
        {
            head: 'C',
            next: 'D',
        },
        {
            head: 'M',
        },
    ];
    var res = '';
    var len = String(num).length;
    var totalLen = len;
    while (len--) {
        var targetNum = Number(String(num)[totalLen - len - 1]);
        if (targetNum < 4) {
            while (targetNum--) {
                res += roman[len].head;
            }
        }
        else if (targetNum === 4) {
            res += roman[len].head + roman[len].next;
        }
        else if (targetNum < 9) {
            res += roman[len].next;
            while (targetNum-- > 5) {
                res += roman[len].head;
            }
        }
        else {
            res += roman[len].head + roman[len + 1].head;
        }
    }
    return res;
}
exports.intToRoman = intToRoman;
var result = intToRoman(58);
console.log(result);
//# sourceMappingURL=series03-romanToInt.js.map
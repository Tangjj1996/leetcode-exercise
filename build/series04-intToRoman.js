"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanToInt = void 0;
function romanToInt(s) {
    var romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    };
    var len = s.length, num = 0;
    var totalLen = len;
    while (len) {
        if (Reflect.has(romanMap, s[totalLen - len] + s[totalLen - len + 1])) {
            num += romanMap[s[totalLen - len] + s[totalLen - len + 1]];
            len -= 2;
        }
        else if (Reflect.has(romanMap, s[totalLen - len])) {
            num += romanMap[s[totalLen - len]];
            len--;
        }
    }
    return num;
}
exports.romanToInt = romanToInt;
var res = romanToInt('LVIII');
console.log(res);
//# sourceMappingURL=series04-intToRoman.js.map
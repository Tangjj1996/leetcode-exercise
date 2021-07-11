"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSubstring = void 0;
function findSubstring(s, words) {
    if (s !== '' && words.length === 0) {
        return [];
    }
    var n = s.length, oneWordLen = words[0].length, wordCnt = words.length, allLen = oneWordLen * wordCnt, wordsCnt = {}; // 每个单词出现的次数
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var w = words_1[_i];
        if (Reflect.has(wordsCnt, w)) {
            wordsCnt[w] += 1;
        }
        else {
            wordsCnt[w] = 0;
        }
    }
    var res = [];
    for (var i = 0; i < oneWordLen; i++) {
        // shell排序
        var curWNum = 0, L = i, R = i, curWDic = {};
        while (R + oneWordLen <= s.length) {
            var W = s.slice(R, R + oneWordLen);
            R += oneWordLen; // R每次向右移一个单词的长度
            if (!Reflect.has(wordsCnt, W)) {
                L = R;
                curWDic = {};
                curWNum = 0;
            }
            else {
                curWDic[W] += 1;
                curWNum += 1;
                while (curWDic[W] > wordsCnt[W]) {
                    var LW = s.slice(L, L + oneWordLen);
                    L += oneWordLen;
                    curWDic[LW] -= 1;
                    curWNum -= 1;
                }
                if (curWNum === wordCnt) {
                    res.push(L);
                }
            }
        }
    }
    return res;
}
exports.findSubstring = findSubstring;
var s = 'barfoothefoobarman', wrods = ['foo', 'bar'];
var res = findSubstring(s, wrods);
console.log(res);
//# sourceMappingURL=series21-findSubstring.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotDuplication = exports.threeSum = void 0;
function threeSum(nums) {
    var len = nums.length;
    var resArr = [];
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            for (var k = j + 1; k < len; k++) {
                if (nums[i] + nums[j] + nums[k] === 0 &&
                    isNotDuplication(resArr, nums[i], nums[j], nums[k])) {
                    resArr.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return resArr;
}
exports.threeSum = threeSum;
function isNotDuplication(resArr) {
    var parmas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        parmas[_i - 1] = arguments[_i];
    }
    var len = resArr.length;
    var jLen = resArr.length;
    // 去重
    while (len--) {
        var arr = resArr[jLen - len - 1];
        var aLen = 3;
        var flagIndex = [];
        while (aLen--) {
            var bLen = aLen + 1;
            while (bLen-- > 0) {
                if (arr[aLen] === parmas[bLen] && !flagIndex.includes(bLen)) {
                    flagIndex.push(bLen);
                    break;
                }
                if (flagIndex.length === 3) {
                    return false;
                }
            }
        }
    }
    return true;
}
exports.isNotDuplication = isNotDuplication;
var nums = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];
var res = threeSum(nums);
console.log(res);
//# sourceMappingURL=series06-threeSum.js.map
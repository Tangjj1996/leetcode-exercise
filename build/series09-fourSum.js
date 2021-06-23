"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fourSum = void 0;
function fourSum(nums, target) {
    if (nums.length < 4) {
        return [];
    }
    nums.sort(function (a, b) { return a - b; });
    var arr = [];
    for (var i = 0, len = nums.length; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (len - i < 4 && nums[i] === nums[j]) {
                i = j;
                continue;
            }
            var left = j + 1;
            var right = nums.length - 1;
            while (left < right) {
                if (nums[i] + nums[j] + nums[left] + nums[right] > target) {
                    right--;
                }
                else if (nums[i] + nums[j] + nums[left] + nums[right] < target) {
                    left++;
                }
                else {
                    arr.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    left++;
                    right--;
                }
            }
        }
    }
    return arr;
}
exports.fourSum = fourSum;
var nums = [2, 2, 2, 2, 2], target = 8;
var res = fourSum(nums, target);
console.log(res);
//# sourceMappingURL=series09-fourSum.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.threeSumClosest = void 0;
function threeSumClosest(nums, target) {
    var n = 0, len = nums.length;
    nums.sort(function (a, b) { return a - b; });
    var arr = [];
    while (n < len) {
        if (n > 0 && nums[n] === nums[n - 1]) {
            n++;
            continue;
        }
        var left = n + 1;
        var right = len - 1;
        while (left < right) {
            var sum = nums[n] + nums[left] + nums[right];
            if (sum < target) {
                arr.push({
                    distance: Math.abs(sum - target),
                    sum: sum,
                });
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
            }
            else if (sum > target) {
                arr.push({
                    distance: Math.abs(sum - target),
                    sum: sum,
                });
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;
            }
            else {
                return sum;
            }
        }
        n++;
    }
    arr.sort(function (a, b) { return a.distance - b.distance; });
    return arr[0].sum;
}
exports.threeSumClosest = threeSumClosest;
var nums = [-1, 2, 1, -4], target = 1;
var res = threeSumClosest(nums, target);
console.log(res);
//# sourceMappingURL=series07-threeSumClosest.js.map
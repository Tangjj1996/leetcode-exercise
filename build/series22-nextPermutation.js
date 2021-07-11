"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextPermutation = void 0;
function nextPermutation(nums) {
    var n = nums.length;
    if (n === 1) {
        return;
    }
    var pivot = n - 2;
    while (pivot > 0 && nums[pivot] >= nums[pivot + 1]) {
        // 满足单调递增
        pivot--;
    }
    if (pivot < 0) {
        // 如果都是单调递增的，直接返回最小的那个数
        reverse(nums, 0, n - 1);
        return;
    }
    var lg = pivot + 1;
    while (lg < n && nums[lg] > nums[pivot]) {
        lg++; // 找到最右侧的断层点
    }
    swap(nums, pivot, lg - 1); // 交换
    reverse(nums, pivot + 1, n - 1); // 从断层点往后翻转
}
exports.nextPermutation = nextPermutation;
function swap(nums, l, r) {
    var temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
}
function reverse(nums, l, r) {
    if (l === void 0) { l = 0; }
    if (r === void 0) { r = nums.length - 1; }
    while (l < r) {
        swap(nums, l++, r--);
    }
}
var nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);
//# sourceMappingURL=series22-nextPermutation.js.map
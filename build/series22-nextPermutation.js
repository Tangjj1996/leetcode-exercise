"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextPermutation = void 0;
function nextPermutation(nums) {
    var n = nums.length;
    if (n === 1) {
        return;
    }
    var k = n - 1;
    while (k - 1 >= 0 && nums[k - 1] >= nums[k]) {
        k--; // 一直到最开始那个
    }
    if (k === 0) {
        reverse(nums, 0, n - 1);
    }
    else {
        var u = k;
        while (u + 1 < n && nums[u + 1] > nums[k - 1]) {
            u++;
        }
        swap(nums, k - 1, u);
        reverse(nums, k, n - 1);
    }
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
var nums = [1, 3, 2];
nextPermutation(nums);
console.log(nums);
//# sourceMappingURL=series22-nextPermutation.js.map
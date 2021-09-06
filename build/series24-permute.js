"use strict";
function permute(nums) {
    var len = nums.length;
    var res = [];
    var current = [];
    function dfs(index, nums) {
        if (current.length === len) {
            res.push(current);
            return;
        }
        for (var i = index; i < len; i++) {
            swap(nums, i, index);
            current.push(nums[index]);
            dfs(index + 1, nums);
            current.pop();
            swap(nums, i, index);
        }
    }
    function swap(nums, i, j) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    dfs(0, nums);
    return res;
}
var nums = [3, 5, 7, 9];
var res = permute(nums);
console.log(res);
//# sourceMappingURL=series24-permute.js.map
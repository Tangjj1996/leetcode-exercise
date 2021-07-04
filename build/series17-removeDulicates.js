"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicates = void 0;
function removeDuplicates(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (i === nums.length - 1) {
            break;
        }
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
        }
    }
    return nums.length;
}
exports.removeDuplicates = removeDuplicates;
var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var res = removeDuplicates(nums);
console.log(res);
//# sourceMappingURL=series17-removeDulicates.js.map